/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: 'Companya Adidasdasdas',
          email: '1@1',
          password: '1',
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
    await queryInterface.bulkDelete('Course', null, {});
    await queryInterface.bulkDelete('Companies', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
