function WelcomeContent() {
    return (
        <div className='h-screen flex items-center justify-center bg-white w-full shadow-lg'>
            <div className="flex flex-col gap-6 items-center">
                <img src="./event.svg" alt="logo" className='w-72 h-64 transition-transform hover:scale-105' />
                <h1 className="text-primary text-6xl font-bold text-center">
                    Camp Karagaq
                </h1>
                <p className="text-gray-600 text-lg text-center max-w-md">
                    Zgjidhja juaj e vetme për rezervimin dhe menaxhimin e dasmave.
                </p>
            </div>
        </div>
    )
}

export default WelcomeContent
