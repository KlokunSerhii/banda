import React from 'react';

function LogOutBtn() {
  return <div>LogOutBtn</div>;
}

export default LogOutBtn;


// По clickу на кнопку має відправлятися запит на backend, який видаляє активну сесію користувача.

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification. 
// Якщо запит на backend пройшов успішно - користувача має переадресувати на публічну сторінку Welcome page.

// Незалежно від відповіді backenda, користувача слід деавторизувати "на клієнті", очистивши при цьому redux store  та localStorage.