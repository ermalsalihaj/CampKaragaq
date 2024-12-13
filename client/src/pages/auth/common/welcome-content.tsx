function WelcomeContent() {
    return (
        <div className='h-screen flex items-center justify-center bg-primary w-full'>
            <div className="flex flex-col gap-3">
                <img src="./event.svg" alt="logo" className='w-64 h-56 ml-20' />
                <h1 className="text-amber-950 text-6xl font-semibold">
                    Camp Karagaq
                </h1>
                <p className="text-white text-sm">
                    Zgjidhja juaj e vetme për rezervimin dhe menaxhimin e dasmave.
                </p>
            </div>

        </div>
    )
}

export default WelcomeContent
