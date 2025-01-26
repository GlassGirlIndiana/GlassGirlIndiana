import { PhoneNumber } from "../lib/constants";

export default function PhoneNumberLink() {
    return (
        <span>Free Quote <a href="tel:+1 765-717-0340" className="text-brand-green hover:text-brand-green-dark underline">1 {PhoneNumber}</a></span>
    );
}