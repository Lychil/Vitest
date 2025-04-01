import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../components/Input";
import userEvent from "@testing-library/user-event";

describe("Input component", () => {
    it("Render Input", () => {
        render(<Input />);
        const input = screen.getByPlaceholderText('Введите текст...');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
    })
})