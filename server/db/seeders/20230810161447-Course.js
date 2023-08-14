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
          username: 1,
          email: '1@1',
          password: '1',
          company_id: 1,
        },
        {
          username: 2,
          email: '2@2',
          password: '1',
          company_id: 1,
        },
        {
          username: 3,
          email: '3@3',
          password: '1',
          company_id: 1,
        },
        {
          username: 4,
          email: '4@4',
          password: '1',
          company_id: 2,
        },
        {
          username: 3,
          email: '5@5',
          password: '1',
          company_id: 2,
        },
        {
          username: 3,
          email: '6@6',
          password: '1',
          company_id: 2,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          title: 'John Doe',
          body: 'bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui',
          downloadLink: '/sadpogfhsjak/njhokfl;/.sad',
          company_id: 1,
        },
        {
          title: 'John Doe',
          body: 'bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui',
          downloadLink: '/sadpogfhsjak/njhokfl;/.sad',
          company_id: 2,
        },
        {
          title: 'John Doe',
          body: 'bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui',
          downloadLink: '/sadpogfhsjak/njhokfl;/.sad',
          company_id: 2,
        },
        {
          title: 'John Doe',
          body: 'bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui',
          downloadLink: '/sadpogfhsjak/njhokfl;/.sad',
          company_id: 2,
        },
        {
          title: 'John Doe',
          body: 'bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui',
          downloadLink: '/sadpogfhsjak/njhokfl;/.sad',
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
          photo: 'Тут типо путь до фото',
          user_id: 1,
        },
        {
          city: 'Париж',
          birthDate: '22.12.2010',
          phone: '+792266479644',
          about: 'Люблю Оладушки',
          companies: 'OOO Швабибас',
          sex: 'Жен',
          photo: 'Тут типо путь до фото',
          user_id: 2,
        },
        {
          city: 'Берлин',
          birthDate: '22.12.2010',
          phone: '+792266479644',
          about: 'Люблю Оладушки',
          companies: 'OOO Швабибас',
          sex: 'Жен',
          photo: 'Тут типо путь до фото',
          user_id: 3,
        },
      ],
      {}
    );

    // await queryInterface.bulkInsert(
    //   'Courses_Users',
    //   [
    //     {
    //       user_id: 1,
    //       courses_id: 1,
    //       status: false,
    //     },
    //     {
    //       user_id: 1,
    //       courses_id: 3,
    //       status: false,
    //     },
    //     {
    //       user_id: 1,
    //       courses_id: 2,
    //       status: false,
    //     },
    //   ],
    //   {}
    // );

    await queryInterface.bulkInsert(
      'Questions',
      [
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
          answer: 'John 2Doe',
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: 'John2 Do2e',
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: 'John2 Doe2',
          isCorrect: false,
          question_id: 1,
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('People', null, {});
    await queryInterface.bulkDelete('Companies', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Answers', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
