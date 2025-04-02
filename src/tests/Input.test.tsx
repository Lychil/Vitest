import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormItem from "../components/FormItem";
import Input from "../components/Input";

describe("Default Input component", () => {
    let input: HTMLElement;

    beforeEach(() => {
        render(<Input />);
        render(<FormItem />);
        input = screen.getByLabelText(/text/i)
    })
    // Рендерится ли компонент input
    it("Render", () => {
        expect(input).toBeInTheDocument();
    })
    // Имеет ли правильный тип
    it('Attribute type=text', () => {
        expect(input).toHaveAttribute('type', 'text');
    })
    // Проверка на пустоту
    it('Check empty', () => {
        expect(screen.getByRole('textbox')).toHaveValue('');
    });
    // проверка аттрибута placeholder
    it('should have empty placeholder by default', () => {
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder');
    });
})

describe('User interactions with Input', () => {
    let input: HTMLElement;

    beforeEach(() => {
        render(<FormItem />);
        input = screen.getByLabelText(/text/i)
    })
    // Посимвольный пользовательский ввод
    it('Input text', async () => {
        const message = 'Hello';
        await userEvent.type(input, message); // имитация посимвольного ввода
        expect(input).toHaveValue(message);
    })
    // Проверка на ивент focus
    it('Focus', async () => {
        await userEvent.click(input);
        expect(input).toHaveFocus();
    })
})