const _data = require('./lib/data');

_data.read('users', 'petras', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }

    const obj = JSON.parse(data);
    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.car);
})


_data.read('users', 'maryte', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }
    const obj = JSON.parse(data);
    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.car);

})


//Specialiai su failintas iskvietimas!
// _data.read('users', 'kebabas', (err, data) => {
//     if (err || !data) {
//         console.log(err);
//         return false;
//     }

//     const obj = JSON.parse(data);
//     console.log(obj);
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.car);
// })