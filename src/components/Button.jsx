function Button({text, onClick}) {
    return (
        <button
         className="aspect-square bg-red-100 rounded-2xl"
         onClick={onClick}
        >
            { text }
        </button>
    );
}

export default Button;