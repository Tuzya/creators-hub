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
          name: 'Companya 222Adidasdasdas',
          email: 'b@b',
          password: '2',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Юра',
          email: '1@1',
          password: '1',
          company_id: 1,
        },
        {
          username: 'Владос',
          email: '4@4',
          password: '1',
          company_id: 2,
        },
        {
          username: 'Антон Алексеевич',
          email: '5@5',
          password: '1',
          company_id: 2,
        },
        {
          username: 'admin',
          email: 'admin@admin',
          password: '1',
          company_id: null,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          title: 'Название курса 1',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 1,
        },
        {
          title: 'Название курса 2',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
        {
          title: 'Название курса 3',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
        {
          title: 'Название курса 4',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
        {
          title: 'Название курса 5',
          body: 'Node.js — это среда выполнения JavaScript, построенная на движке V8 от Google. Node.js была создана в 2009 году Райаном Далем (Ryan Dahl), который хотел улучшить возможности серверных приложений того времени. Он заметил, что большинство серверов работали по принципу одновременного обслуживания ограниченного количества соединений, что приводило к низкой производительности и высокому потреблению ресурсов. Райану пришла в голову идея использовать JavaScript на сервере и сделать его асинхронным и неблокирующим, то есть способным обрабатывать множество соединений параллельно без задержек.',
          downloadLink: '1692291181174-814833890-1iie2415.pdf',
          company_id: 2,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'People',
      [
        {
          city: 'Moscow',
          birthDate: '22.12.2010',
          phone: '+792266479644',
          about: 'Люблю Оладушки',
          companies: 'OOO Швабибас',
          sex: 'Жен',
          photo: '1692275508938.webp',
          user_id: 1,
        },
        {
          city: 'Париж',
          birthDate: '22.12.2010',
          phone: '+792266479644',
          about: 'Люблю Оладушки',
          companies: 'OOO Швабибас',
          sex: 'Жен',
          photo: '1692275508938.webp',
          user_id: 2,
        },
        {
          city: 'Берлин',
          birthDate: '22.12.2010',
          phone: '+792266479644',
          about: 'Люблю Оладушки',
          companies: 'OOO Швабибас',
          sex: 'Жен',
          photo: '1692275508938.webp',
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
          question: 'John Doe',
          courses_id: 1,
        },
        {
          question: 'John Doe',
          courses_id: 1,
        },
        {
          question: 'John Doe',
          courses_id: 1,
        },
        {
          question: 'John Doe',
          courses_id: 1,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Answers',
      [
        {
          answer: 'John',
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: 'Do2e',
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: 'John2 Doe2',
          isCorrect: true,
          question_id: 1,
        },
        {
          answer: 'John',
          isCorrect: false,
          question_id: 2,
        },
        {
          answer: 'Do2e',
          isCorrect: false,
          question_id: 2,
        },
        {
          answer: 'John2 Doe2',
          isCorrect: true,
          question_id: 2,
        },
        {
          answer: 'John',
          isCorrect: false,
          question_id: 3,
        },
        {
          answer: 'Do2e',
          isCorrect: false,
          question_id: 3,
        },
        {
          answer: 'John2 Doe2',
          isCorrect: true,
          question_id: 3,
        },
        {
          answer: 'John',
          isCorrect: false,
          question_id: 4,
        },
        {
          answer: 'Do2e',
          isCorrect: false,
          question_id: 4,
        },
        {
          answer: 'John2 Doe2',
          isCorrect: true,
          question_id: 4,
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
