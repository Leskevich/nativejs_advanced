import React from 'react'
import './lesson_4';

const Lesson4 = () => {
    // Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
    const handlePromise: any = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess(paramName: any) {
            console.log(`Promise is resolved with data: ${paramName}`)

        },
        onError(paramName: string) {
            console.log(`Promise is rejected with error: ${paramName}`)

        }
    }
function createPromise() {
        handlePromise.promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve;
            handlePromise.reject = reject;
        });
        console.log('Promise created');
    }
    function ResolvePromise() {
        handlePromise.resolve('hhhh')
        handlePromise.promise.then((data:any)=>handlePromise.onSuccess(data))
    }


    return (
        <div>
            <button
                id='btn-create-promise'
                onClick={createPromise}
            >Create Promise
            </button>
            <button
                id='btn-resolve-promise'
                onClick={ResolvePromise}
            >Resolve Promise
            </button>
            <button
                id='btn-reject-promise'
                onClick={() => handlePromise.reject()}
            >Reject Promise</button>
        </div>
    );
}

export default Lesson4;