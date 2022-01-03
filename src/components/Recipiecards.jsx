export const RecipieCards = ({ data, handleFullData }) => {
  console.log("cards", data);
  return (
    <>
      {data.map((e) => {
        return (
          <div
            onClick={() => {
              console.log("card clicked", e);
              handleFullData(e);
            }}
          >
            Dish :-{e.title} Cooking Time :-{e.time}
          </div>
        );
      })}
    </>
  );
};
