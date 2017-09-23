import casual from 'casual';

const mocks = {
  String: () => 'GraphQL exercise.',
  Query: () => ({
    numbers:(root, args) => {
      return { sumOfNumbers: (args.digit1 + args.digit2), digit1: args.digit1, digit2:args.digit2};
    },
  }),
};

export default mocks;
