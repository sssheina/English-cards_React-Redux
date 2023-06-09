class GET {
    static async getWords() {
        try {
            const response = await fetch('https://itgirlschool.justmakeit.ru/api/test/');
            if (response.ok) {
                console.log('URL is reachable.');
            } else {
                console.log('URL is not reachable.');
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

export default GET;


// class GET {
//     static async getWords() {
//         try {
//             const r = await fetch('http://itgirlschool.justmakeit.ru/api/words');
//             console.log(r);
//             const data = await r.json();
//             return data;
//         } catch (e) {
//             console.error(e);
//         }
//     }
// }

// export default GET;
