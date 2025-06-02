const jsLesson = (
    <div className="js-lesson">
        <h1 style={{ color: '#2c3e50' }}>Основы JavaScript</h1>

        <div className="lesson-section">
            <h2 style={{ color: '#3498db' }}>1. Что такое JavaScript?</h2>
            <p>JavaScript - это язык программирования для создания интерактивных веб-страниц.</p>
            <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt="JS Logo"
                style={{ width: '100px', float: 'right', margin: '0 0 15px 15px' }}
            />
            <p><strong>Основные возможности:</strong></p>
            <ul>
                <li>Добавление интерактивности</li>
                <li>Работа с DOM</li>
                <li>Асинхронные запросы</li>
                <li>Хранение данных на клиенте</li>
            </ul>
        </div>

        <div className="lesson-section" style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
            <h2 style={{ color: '#3498db' }}>2. Переменные и типы данных</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '15px 0', border: '1px solid black' }}>
                <thead>
                    <tr style={{ background: '#e8f4fc' }}>
                        <th style={{ padding: '8px' }}>Тип</th>
                        <th style={{ padding: '8px' }}>Пример</th>
                        <th style={{ padding: '8px' }}>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px' }}>Number</td>
                        <td style={{ padding: '8px' }}><code>42, 3.14</code></td>
                        <td style={{ padding: '8px' }}>Числовые значения</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px' }}>String</td>
                        <td style={{ padding: '8px' }}><code>"Hello"</code></td>
                        <td style={{ padding: '8px' }}>Текстовые данные</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px' }}>Boolean</td>
                        <td style={{ padding: '8px' }}><code>true, false</code></td>
                        <td style={{ padding: '8px' }}>Логические значения</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ background: '#272822', color: '#f8f8f2', padding: '15px', borderRadius: '5px', margin: '15px 0' }}>
                <pre>
                    <code className="javascript">
                        {`// Объявление переменных
let message = "Привет";
const PI = 3.14;
var oldStyle = "Устаревший способ";

// Вывод в консоль
console.log(message);`}
                    </code>
                </pre>
            </div>
        </div>

        <div className="lesson-section">
            <h2 style={{ color: '#3498db' }}>3. Функции</h2>

            <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
                <div style={{ flex: 1, background: '#f0f7ff', padding: '15px', borderRadius: '5px' }}>
                    <h3 style={{ color: '#2980b9' }}>Обычная функция</h3>
                    <pre><code>{`function sum(a, b) {
  return a + b;
}`}</code></pre>
                </div>

                <div style={{ flex: 1, background: '#f0fff0', padding: '15px', borderRadius: '5px' }}>
                    <h3 style={{ color: '#27ae60' }}>Стрелочная функция</h3>
                    <pre><code>{`const multiply = (a, b) => a * b;`}</code></pre>
                </div>
            </div>
        </div>

        <div className="lesson-section" style={{ border: '1px solid #eee', padding: '15px', marginTop: '20px' }}>
            <h2 style={{ color: '#3498db' }}>4. Практическое задание</h2>
            <p>Создайте функцию, которая принимает имя и возвращает приветствие:</p>

            <div style={{ background: '#fff8e1', padding: '15px', borderLeft: '4px solid #ffc107' }}>
                <h3 style={{ marginTop: 0 }}>Пример решения:</h3>
                <pre><code className="javascript">{`function createGreeting(name) {
  return \`Привет, \${name}!\`;
}

console.log(createGreeting("Анна"));
// Выведет: "Привет, Анна!"`}</code></pre>
            </div>
        </div>

        <div style={{ marginTop: '30px', padding: '15px', background: '#e8f5e9', borderRadius: '5px' }}>
            <h3>Полезные ресурсы:</h3>
            <ul>
                <li><a href="https://learn.javascript.ru" target="_blank" rel="noopener noreferrer">Современный учебник JavaScript</a></li>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN JavaScript</a></li>
            </ul>
        </div>
    </div>
);

// Пример использования в компоненте
export default function JSLessonComponent() {
    return (
        <div>
            {jsLesson}
            <style>{`
        .code-block {
          background: #f5f5f5;
          padding: 10px;
          border-radius: 4px;
          font-family: monospace;
        }
        .lesson-section {
          margin-bottom: 25px;
        }
      `}</style>
        </div>
    );
}