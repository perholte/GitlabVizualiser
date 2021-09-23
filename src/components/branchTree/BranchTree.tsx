import React from "react";
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import { getBranches } from "../../api";


const BranchTree = () => {

  const options = {
    author: "employee1",
    template: templateExtend(TemplateName.Metro, {
      commit: {
        message: {
          displayAuthor: false,
          displayHash: false
        }
      },
    })
  };

  return <>
  <Gitgraph options={options}>
    {(gitgraph) => {
      getBranches().then((res) => {
        for (let i = 0; i < res.length; i++) {
          console.log(res[i].name);
          gitgraph.branch(res[i].name).commit(res[i].commit.title)
          
        }
      })
}
  }
  </Gitgraph>
  </>;
};

export default BranchTree;