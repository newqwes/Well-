// Моя новая версия базы data 2.0  https://qna.habr.com/q/671666

//<select id="country"></select>
//<select id="city"></select>
//<select id="price"></select>

// let data = [
//     {id: '1', country: 'Apple', cities: [
//       {price: '1-2', city: 'iPhone X'},
//       {price: '1-2', city: 'Санк-Петербург'},
//       {price: '1-3', city: 'Сочи'},
//       {price: '1-4', city: 'Анапа'}
//     ]},
//     {id: '2', country: 'Беларусь', cities: [
//       {price: '2-1', city: 'Минск'},
//       {price: '2-2', city: 'Гомель'},
//       {price: '2-3', city: 'Витебск'}
//     ]},
//     {id: '3', country: 'Украина', cities: [
//       {price: '3-1', city: 'Киев'},
//       {price: '3-2', city: 'Львов'},
//       {price: '3-3', city: 'Одеса'}
//     ]}
//   ];
// const
//   countryEl = document.querySelector('#country'),
//   cityEl = document.querySelector('#city'),  
//   priceEl = document.querySelector('#price');


// countryEl.innerHTML = data
//   .map(n => `<option value="${n.id}">${n.country}</option>`)
//   .join('');

// countryEl.addEventListener('change', function() {
//   cityEl.innerHTML = data
//     .find(n => n.id === this.value)
//     .cities
//     .map(n => `<option value="${n.id}">${n.city}</option>`)
//     .join('');
// });
// countryEl.addEventListener('change', function() {
//   priceEl.innerHTML = data
//     .find(n => n.id === this.value)
//     .cities
//     .map(n => `<option value="${n.id}">${n.price}</option>`)
//     .join('');
// });
// countryEl.dispatchEvent(new Event('change'));
