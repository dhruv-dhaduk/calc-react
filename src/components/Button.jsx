function Button({text, onClick}) {
    return (
        <button
         className="aspect-square bg-black text-white rounded-2xl text-3xl font-bold active:bg-white active:text-black"
         onClick={onClick}
        >
            { text }
        </button>
    );
}

export default Button;