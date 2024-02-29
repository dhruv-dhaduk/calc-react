function Button({text, onClick}) {
    return (
        <button
         className="aspect-square bg-black text-white rounded-2xl text-3xl font-bold"
         onClick={onClick}
        >
            { text }
        </button>
    );
}

export default Button;