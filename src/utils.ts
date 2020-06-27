export const buildTreeData = (data: any) => {
  const preProcess = (data: any) => {
    return (
      data
        //Order ID's
        .map(({ children, parents, ...restOfperson }: any) => {
          return {
            ...restOfperson,
            children: [...children].sort(),
            parents: [...parents].sort(),
          };
        })
        //Store children ID's & single parents ID
        .map((person: any) => {
          return {
            ...person,
            childrenIds: person.children,
            parentId: person.parents[0] || null,
          };
        })
    );
  };

  const getChildren = (people: any, id = null, link = "parentId") => {
    return people
      .filter((person: any) => {
        return person[link] === id;
      })
      .map((person: any) => {
        return {
          ...person,
          children: getChildren(people, person.id),
        };
      });
  };

  const preProcessedItems = preProcess(data);

  return getChildren(preProcessedItems);
};
