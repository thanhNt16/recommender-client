export const algorithms = [
  {
    id: "content",
    title: "Content-based Filtering",
    description:
      "Content-based filtering uses item features to recommend other items similar to what the user likes, based on their previous actions or explicit feedback.",
    image: "/images/algorithms/collaborative.png",
    guide: 'Pass your_item_id to get top number_of_recommendation similar items',
    params: '&item_id=your_item_id&top=number_of_recommendation'
  },
  {
    id: "collaborative",
    title: "Collaborative Filtering",
    description:
      "To address some of the limitations of content-based filtering, collaborative filtering uses similarities between users and items simultaneously to provide recommendations. ",
    image: "/images/algorithms/collaborative.png",
  },
  {
    id: "sequence",
    title: "Sequence-aware Recommendation",
    description:
      "Sequence-aware recommendation is a method that we review existing interactions that consider information from such sequentially ordered user-item interaction logs in the recommendation process. Based on this review, we propose a categorization of the corresponding recommendation tasks and goals",
    image: "/images/algorithms/collaborative.png",
  },
];
