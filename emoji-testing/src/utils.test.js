import {sumSalaries, getBigSalaries} from './utils';

const people = [
  {
    name: 'miltos',
    salary: 800
  },
  {
    name: 'giannis',
    salary: 1200
  },
  {
    name: 'kostas',
    salary: 2000
  },
  {
    name: 'stavros',
    salary: 3000
  }
];

describe('utils', () => {
  describe('@getBigSalaries', () => {
    it('should return an empty array when all salaries are less than 1500', () => {
      const actual = getBigSalaries([{
        name: 'miltos',
        salary: 800
      },
      {
        name: 'giannis',
        salary: 1200
      }]);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should return salaries more than 1500', () => {
      const actual = getBigSalaries(people);
      const expected = [{
        name: 'kostas',
        salary: 2000
      },
      {
        name: 'stavros',
        salary: 3000
      }
    ];
      expect(actual).toEqual(expected);
    });
  });

  describe('@sumSalaries', () => {
    it('should return 0 when the array is empty', () => {
      const actual = sumSalaries([]);
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    it('should return the sum of salaries', () => {
      const actual = sumSalaries(people);
      const expected = 7000;
      expect(actual).toEqual(expected);
    });
  });
});
