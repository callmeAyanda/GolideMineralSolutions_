"use client";


export default function SectionContainer
    ({
        children,
        className = '',
        bgColor = 'transparent',
        padding = 'py-20',
        id
    }) {
    return (
        <section
            id={id}
            className={`${bgColor} ${padding} ${className}`}
            style={{ scrollMarginTop: '100px' }}
        >
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

