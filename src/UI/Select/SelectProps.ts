export interface SelectProps {
    defaultOption: string;
    options: string[] | null;
    whiteTheme?: Boolean;
    onChange?: () => void;
}