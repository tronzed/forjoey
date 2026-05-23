import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NoPage() {




    const arr = [4, 3, 2, 9];

    var plusOne = function (digits) {

        const last = digits.pop() + 1;

        let data = []

        if (last >= 10) {

            data = last.toString().split('');

        }


        const dddd = digits.concat(data);

        console.log(dddd);

    };


    plusOne(arr);



    return (
        <>
            <Header />
            404
            <Footer />
        </>
    );
}