export const buildTreeData = (data: any) => {
  const preProcess = (data: any) => {
    return data.map((person: any) => {
      return {
        ...person,
        childrenIds: person.children,
        parentId: person.parents[0] || null,
      };
    });
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
