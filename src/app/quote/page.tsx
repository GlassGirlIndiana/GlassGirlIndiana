export default function Quote() {
    return (
        <div className="h-screen items-center justify-center flex">
            {/* Form requiring name email and phone number to request a quote */}
            <form className="flex flex-col gap-4 w-full max-w-xl">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" />
                <label htmlFor="message">Let us know how we can help.</label>
                <textarea id="message" />
                <button className="py-2 px-4 bg-brand-green hover:bg-brand-green-dark text-white rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
}
