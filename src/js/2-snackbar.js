import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formPromises = document.querySelector(".form");

formPromises.addEventListener("submit", evt => {
    evt.preventDefault();

    const delay = parseInt(evt.target.delay.value, 10);
    const state = evt.target.state.value;

    iziToast.info({
        message: 'Promise is pending...',
        position: 'topRight',
    });

    const getPromiseResult = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    getPromiseResult
    .then(time => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${time}ms`,
        position: 'topRight',
      });
    })
    .catch(time => {
      iziToast.error({
        message: `❌ Rejected promise in ${time}ms`,
        position: 'topRight',
      });
    });
   
});