import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NoPage() {


    const arr = [1, 2, 3];

    var plusOne = function (digits) {

        const asOne = BigInt(digits.join('')) + 1n;

        const asSplit = asOne.toString().split("");

        const result = []

        for (let i = 0; i < asSplit.length; i++) {
            result.push(Number(asSplit[i]));
        }

        return result;
    };


    plusOne(arr);
    // console.log(plusOne(arr));



    return (
        <>
            <Header />
            404
            <Footer />
        </>
    );
}