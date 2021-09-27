import React from "react";
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";

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
      const master = gitgraph.branch("master");
      master.commit('init');

      const develop = master.branch("style");
      develop.commit("commit");

      const branch1 = develop.branch("branch1");
        branch1
          .commit("commit-branch1")
          .commit("commit2-branch1");

        develop.merge(branch1);
        develop.commit("merged");

    }}
  </Gitgraph>
  </>;
};

export default BranchTree;
