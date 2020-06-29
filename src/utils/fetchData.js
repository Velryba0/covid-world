export const FetchAllData = async () => {
    try {
        const response = await fetch('https://api.covid19api.com/summary');
        const allData = response.json();
        return allData
    } catch (error) {
        console.log('Error al obtener la informción', error);
    }
}

// export const FetchDataCDMX = async () => {
//     try {
//         const response = await fetch('https://api.covid19api.com/');
//         const allData = response.json();
//         return allData
//     } catch (error) {
//         console.log('Error al obtener la informción', error);
//     }
// }

