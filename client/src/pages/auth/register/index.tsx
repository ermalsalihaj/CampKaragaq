import WelcomeContent from "../common/welcome-content"

function RegisterPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="cols-span-1 lg:flex hidden">
                <WelcomeContent />
            </div>
            <div>
                Form Content
            </div>
        </div>
    )
}

export default RegisterPage
