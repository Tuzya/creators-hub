/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Companies",
      [
        {
          name: "Companya Adidasdasdas",
          email: "a@a",
          password: "1",
        },
        {
          name: "Companya 222Adidasdasdas",
          email: "b@b",
          password: "2",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Юра",
          email: "1@1",
          password: "1",
          company_id: 1,
        },
        {
          username: "Санчос",
          email: "2@2",
          password: "1",
          company_id: 1,
        },
        {
          username: "Дахан",
          email: "3@3",
          password: "1",
          company_id: 1,
        },
        {
          username: "Владос",
          email: "4@4",
          password: "1",
          company_id: 2,
        },
        {
          username: "Антон Алексеевич",
          email: "5@5",
          password: "1",
          company_id: 2,
        },
        {
          username: "Навальный",
          email: "6@6",
          password: "1",
          company_id: 2,
        },
        {
          username: "admin",
          email: "admin@admin",
          password: "1",
          company_id: null,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Courses",
      [
        {
          title: "Курс 1",
          body: "bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui",
          downloadLink: "/sadpogfhsjak/njhokfl;/.sad",
          company_id: 1,
        },
        {
          title: "Курс 2",
          body: "bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui",
          downloadLink: "/sadpogfhsjak/njhokfl;/.sad",
          company_id: 2,
        },
        {
          title: "Курс 3",
          body: "bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui",
          downloadLink: "/sadpogfhsjak/njhokfl;/.sad",
          company_id: 2,
        },
        {
          title: "Курс 4",
          body: "bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui",
          downloadLink: "/sadpogfhsjak/njhokfl;/.sad",
          company_id: 2,
        },
        {
          title: "Курс 5",
          body: "bbuygfjoskpdlpksgdjkgldjfmsl;dfmsgjbfopkokpsjjsdfbnkosjgbfiupfahoisugyfoiusafogyui",
          downloadLink: "/sadpogfhsjak/njhokfl;/.sad",
          company_id: 2,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "People",
      [
        {
          city: "Moscow",
          birthDate: "22.12.2010",
          phone: "+792266479644",
          about: "Люблю Оладушки",
          companies: "OOO Швабибас",
          sex: "Жен",
          photo: "Тут типо путь до фото",
          user_id: 1,
        },
        {
          city: "Париж",
          birthDate: "22.12.2010",
          phone: "+792266479644",
          about: "Люблю Оладушки",
          companies: "OOO Швабибас",
          sex: "Жен",
          photo: "Тут типо путь до фото",
          user_id: 2,
        },
        {
          city: "Берлин",
          birthDate: "22.12.2010",
          phone: "+792266479644",
          about: "Люблю Оладушки",
          companies: "OOO Швабибас",
          sex: "Жен",
          photo: "Тут типо путь до фото",
          user_id: 3,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "John Doe",
          courses_id: 1,
        },
        {
          question: "John 2Doe",
          courses_id: 1,
        },
        {
          question: "John2 Do2e",
          courses_id: 1,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Answers",
      [
        {
          answer: "John 2Doe",
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: "John2 ",
          isCorrect: false,
          question_id: 1,
        },
        {
          answer: " Doe2",
          isCorrect: true,
          question_id: 1,
        },
        {
          answer: "John 2Doe",
          isCorrect: false,
          question_id: 2,
        },
        {
          answer: "John2 ",
          isCorrect: false,
          question_id: 2,
        },
        {
          answer: " Doe2",
          isCorrect: true,
          question_id: 2,
        },
        {
          answer: "John 2Doe",
          isCorrect: false,
          question_id: 3,
        },
        {
          answer: "John2 ",
          isCorrect: false,
          question_id: 3,
        },
        {
          answer: " Doe2",
          isCorrect: true,
          question_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Courses", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("People", null, {});
    await queryInterface.bulkDelete("Companies", null, {});
    await queryInterface.bulkDelete("Questions", null, {});
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
