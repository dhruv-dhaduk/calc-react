function Display({ expr }) {

    return (
        <div className="h-28 pr-4 bg-black flex justify-end items-center rounded-2xl">
            <p className="text-green-600 text-5xl"> { expr } </p>
        </div>
    );
}

export default Display;