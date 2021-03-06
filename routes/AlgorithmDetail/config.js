export const algorithims = [
  {
    id: "content",
    intro:
      "You need to prepare a CSV file which suite for Content-based Filtering algorithm.",
    instruction: {
      parent: "The requirement file need to have 3 fields:",
      children: [
        "itemId: The id of your product",
        "content: The text content of your product.( It could be the product name, product description, product category, etc... )",
      ],
    },
    dataColumns: [
      {
        title: "itemId",
        dataIndex: "itemId",
        key: "itemId",
        render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "content",
        dataIndex: "content",
        key: "content",
      },
    ],
    data: [
      {
        key: "1",
        itemId: "1",
        content: "Product 1",
      },
      {
        key: "2",
        itemId: "2",
        content: "Product 2",
      },
    ],
  },
  {
    id: "collaborative",
    intro:
      "You need to prepare a CSV file which suite for Collaborative Filtering algorithm.",
    instruction: {
      parent: "The requirement file need to have 4 fields:",
      children: [
        "itemId: The id of your product",
        "userId: The id of your user",
        "feedBack: The review of user on the product. For example, rating 5 stars. number of time spend of user on the product",
        "explicit: if you have explicit rating like 5 4 3 2 1 make this true. Otherwise make it false",
      ],
    },
    dataColumns: [
      {
        title: "itemId",
        dataIndex: "itemId",
        key: "itemId",
        render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "userId",
        dataIndex: "userId",
        key: "userId",
        render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "feedBack",
        dataIndex: "feedBack",
        key: "feedBack",
      },
      {
        title: "explicit",
        dataIndex: "explicit",
        key: "explicit",
      }
    ],
    data: [
      {
        key: "1",
        itemId: "1",
        userId: "1",
        feedBack: "5",
        explicit: "true"
      },
      {
        key: "2",
        itemId: "2",
        userId: "2",
        feedBack: "2",
        explicit: "true"
      },
      {
        key: "2",
        itemId: "3",
        userId: "3",
        feedBack: "1",
        explicit: "true"
      },
      {
        key: "2",
        itemId: "2",
        userId: "3",
        feedBack: "5",
        explicit: "true"
      },
    ],
  },
  {
    id: "word2vec",
    intro:
      "You need to prepare a CSV file which suite for Word2vec algorithm.",
    instruction: {
      parent: "The requirement file need to have 3 fields:",
      children: [
        "itemId: The id of your product",
        "content: The text content of your product.( It could be the product name, product description, product category, etc... )",
      ],
    },
    dataColumns: [
      {
        title: "itemId",
        dataIndex: "itemId",
        key: "itemId",
        render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "content",
        dataIndex: "content",
        key: "content",
      },
    ],
    data: [
      {
        key: "1",
        itemId: "1",
        content: "Product 1",
      },
      {
        key: "2",
        itemId: "2",
        content: "Product 2",
      },
    ],
  },
];
