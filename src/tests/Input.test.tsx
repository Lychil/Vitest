import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormItem from "../components/FormItem";
import Input from "../components/Input";

describe("Default Input component", () => {
    // Рендерится ли компонент input
    it("Render", () => {
        render(<FormItem />);
        const input = screen.getByLabelText(/text/i);
        expect(input).toBeInTheDocument();
    })
    // Имеет ли правильный тип
    it('Attribute type=text', () => {
        render(<FormItem />)
        const input = screen.getByLabelText(/text/i);
        expect(input).toHaveAttribute('type', 'text');
    })
    // Проверка на пустоту
    it('Check empty', () => {
        render(<Input />);
        expect(screen.getByRole('textbox')).toHaveValue('');
    });
    // проверка аттрибута placeholder
    it('should have empty placeholder by default', () => {
        render(<Input />);
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder');
    });
})

describe('User interactions with Input', () => {
    // Посимвольный пользовательский ввод
    it('Input text', async () => {
        render(<FormItem />);
        const input = screen.getByLabelText(/text/i);
        const message = 'Hello';
        await userEvent.type(input, message); // имитация посимвольного ввода
        expect(input).toHaveValue(message);
    })
    // Проверка на ивент focus
    it('Focus', async () => {
        render(<FormItem />);
        const input = screen.getByLabelText(/text/i);
        await userEvent.click(input);
        expect(input).toHaveFocus();
    })
})