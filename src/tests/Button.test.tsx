import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';
import { vi } from 'vitest';

describe('Button Component', () => {
    it('renders кнопку с правильным текстом', () => {
        render(<Button label="Нажми меня" onClick={() => {}} />);
        expect(screen.getByText('Нажми меня')).toBeInTheDocument();
    });

    it('вызывает onClick при клике', async () => {
        const handleClick = vi.fn();
        render(<Button label="Нажми меня" onClick={handleClick} />);
        await userEvent.click(screen.getByText('Нажми меня'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});