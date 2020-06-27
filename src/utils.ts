import isEmpty from "lodash/isEmpty";
import cloneDeep from "lodash/cloneDeep";

export const processChildren = (children: Array<any>, people: Array<any>) => {
  const processedChildren = children
    .map((childId: number) => {
      return people.find(({ id }) => id === childId);
    })
    .filter((element: any) => (!element ? false : true));

  console.log("xxx: ", processedChildren);
  console.log("xxx: ", processData(processedChildren));

  return processedChildren;
};

export const processData = (data: any) => {
  const people = cloneDeep(data);
  console.log("peopleL ", people);

  return (
    people
      // @ts-ignore
      .map(({ children, ...rest }) => {
        const hasChildren = !isEmpty(children);

        if (hasChildren) {
          return {
            // children: processChildren(children, people),
            children: children
              .map((childId: number) => {
                return people.find(({ id }: any) => id === childId);
              })
              .filter((element: any) => (!element ? false : true)),
            ...rest,
          };
        }

        return {
          children,
          ...rest,
        };
      })
      .filter((person: any) => isEmpty(person.parents))
  );
};
