interface ClickOptions {
    element: Element | (() => Element);
}

export function verifyClickOption(options: ClickOptions) {
    const element = (typeof options.element === 'function'
        ? options.element()
        : options.element) as HTMLDivElement;
}
