/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: 'Companya Adidasdasdas',
          email: 'a@a',
          password: '1',
        },
        {
          name: 'Elbrus Bootcamp',
          email: 'elbrus@elbrus',
          password: 'elbrus',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Александр Князев',
          email: '1@1',
          password: '1',
          company_id: 2,
        },
        {
          username: 'Юлия Павлова',
          email: '4@4',
          password: '1',
          company_id: 2,
        },
        {
          username: 'Гоша Бабаян',
          email: '5@5',
          password: '1',
          company_id: 2,
        },
        {
          username: 'Адам Балкоев',
          email: '2@2',
          password: '1',
          company_id: 2,
        },
        {
          username: 'admin',
          email: 'admin@admin',
          password: '1',
          company_id: 1,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          title: 'Sequelize',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 1,
        },
        {
          title: 'React',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
        {
          title: 'Mob X',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
        {
          title: 'Electron',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
        {
          title: 'Курс по Node.js',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: 'Nodejs.pdf',
          company_id: 2,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'People',
      [
        {
          city: 'Москва',
          birthDate: '22.12.2010',
          phone: '+7922..........',
          about: 'Всегда можно погуглить. Погугли!',
          companies: 'Elbrus Bootcamp',
          sex: 'Муж',
          photo: 'adam.jpg',
          user_id: 4,
        },
        {
          city: 'Moscow',
          birthDate: '22.12.2010',
          phone: '+7922.....',
          about: 'Здравствуйте, дорогие студенты',
          companies: 'Elbrus Bootcamp',
          sex: 'Муж',
          photo: 'sasha.jpg',
          user_id: 1,
        },
        {
          city: 'Москва',
          birthDate: '22.12.2010',
          phone: '+7922.......',
          about: 'Очень хорошо знаю JS, TS, Redux, etc',
          companies: 'Elbrus Bootcamp',
          sex: 'Жен',
          photo: 'july.jpg',
          user_id: 2,
        },
        {
          city: 'Москва',
          birthDate: '22.12.2010',
          phone: '+7922..........',
          about: 'Создатель Elbrus Bootcamp',
          companies: 'Elbrus Bootcamp',
          sex: 'Муж',
          photo: 'goga.jpg',
          user_id: 3,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'CoursesUsers',
      [
        {
          user_id: 1,
          courses_id: 1,
          status: false,
        },
        {
          user_id: 1,
          courses_id: 3,
          status: false,
        },
        {
          user_id: 1,
          courses_id: 2,
          status: false,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Node.js - это',
          courses_id: 5,
        },
        {
          question: 'В каком году была создана Node.js',
          courses_id: 5,
        },
        {
          question: 'Выберите главную особенность Node.js',
          courses_id: 5,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Answers',
      [
        {
          answer:
            'это среда выполнения JavaScript, построенная на движке V8 от Google',
          isCorrect: true,
          question_id: 1,
        },
        {
          answer:
            'это среда, разработанная в Amazon для внутренних сотрудников',
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: 'это среда, которая маленькая пятница',
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: '2019',
          isCorrect: false,
          question_id: 2,
        },
        {
          answer: '1999',
          isCorrect: false,
          question_id: 2,
        },
        {
          answer: '2009',
          isCorrect: true,
          question_id: 2,
        },
        {
          answer: 'создавать особые условия разработки для разработчиков',
          isCorrect: false,
          question_id: 3,
        },
        {
          answer: 'обрабатывать get и post запросы',
          isCorrect: false,
          question_id: 3,
        },
        {
          answer: 'обрабатывать множество соединений параллельно без задержек',
          isCorrect: true,
          question_id: 3,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'Добро Пожаловать',
          body: '',
          img: '/img/fon.png',
          company_id: 2,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('People', null, {});
    await queryInterface.bulkDelete('Companies', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
