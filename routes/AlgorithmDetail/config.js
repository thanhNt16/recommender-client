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
    guide: 'Pass your_item_id to get top number_of_recommendation similar items',
    params: '&item_id=your_item_id&top=number_of_recommendation'
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
        title: "userId",
        dataIndex: "userId",
        key: "userId",
        // render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "itemId",
        dataIndex: "itemId",
        key: "itemId",
        // render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "feedBack",
        dataIndex: "feedBack",
        key: "feedBack",
      }
    ],
    data: [
      {
        key: "1",
        itemId: "1",
        userId: "1",
        feedBack: "5",
      },
      {
        key: "2",
        itemId: "2",
        userId: "2",
        feedBack: "2",
      },
      {
        key: "3",
        itemId: "3",
        userId: "3",
        feedBack: "1",
      },
      {
        key: "4",
        itemId: "2",
        userId: "3",
        feedBack: "5",
      },
    ],
    guide: 'Pass your_user_id to get top number_of_recommendation for this user',
    params: '&user_id=your_user_id&top=number_of_recommendation'
  },
  {
    id: "sequence",
    intro:
      "You need to prepare a CSV file which suite for Sequence-aware algorithm.",
    instruction: {
      parent: "The requirement file need to have 3 fields:",
      children: [
        "UserId: The id of your user",
        "itemId: The id of your product",
        "feedBack: a number to indicate the interaction of user with item. You can use any number. For example: 1",
      ],
    },
    dataColumns: [
      {
        title: "userId",
        dataIndex: "userId",
        key: "userId",
        render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "itemId",
        dataIndex: "itemId",
        key: "itemId",
        render: (text) => <span className="gx-link">{text}</span>,
      },
      {
        title: "feedBack",
        dataIndex: "feedBack",
        key: "feedBack",
      },
    ],
    data: [
      {
        key: "1",
        userId: 'user 1',
        itemId: "1",
        feedBack: "1",
      },
      {
        key: "2",
        userId: 'user 2',
        itemId: "2",
        feedBack: "1",
      },
      {
        key: "3",
        userId: 'user 1',
        itemId: "2",
        feedBack: "1",
      },
      {
        key: "2",
        userId: 'user 2',
        itemId: "4",
        feedBack: "1",
      },
    ],
    guide: 'Pass your_user_id to get top number_of_recommendation for this user',
    params: '&user_id=your_user_id&top=number_of_recommendation'
  },
];
