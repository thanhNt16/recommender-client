export const algorithms = [
  {
    id: "content",
    title: "Content-based Filtering",
    description:
      "Content-based filtering uses item features to recommend other items similar to what the user likes, based on their previous actions or explicit feedback.",
    image: "/images/algorithms/content.png",
    guide: 'Pass your_item_id to get top number_of_recommendation similar items',
    params: '&item_id=your_item_id&top=number_of_recommendation'
  },
  // {
  //   id: "word2vec",
  //   title: "Word2Vec Recommendation",
  //   description:
  //     "Word2Vec recommendation is a method that we train a model that learn interaction history of user and product, then give recommendation based on similarity",
  //   image: "/images/algorithms/collaborative.png",
  // },
  {
    id: "collaborative",
    title: "Collaborative Filtering",
    description:
      "To address some of the limitations of content-based filtering, collaborative filtering uses similarities between users and items simultaneously to provide recommendations. ",
    image: "/images/algorithms/collaborative.png",
  },
];
