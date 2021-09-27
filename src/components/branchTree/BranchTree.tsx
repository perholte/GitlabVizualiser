import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import { getBranches, Branch } from "../../api";

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
          let branches: Array<Branch> = []
          let master:any
          
          // La til noen ekstra branches for å se hvordan det var med merged branches.
          
          res.push({name: "test",
            merged: true,
            developers_can_push: false,
            developers_can_merge: false,
            web_url: "egerger",
            commit: {title: "test",
              short_id: "ergerge",
              created_at: new Date(),},})
          for (let i = 0; i < res.length; i++) {
            if (res[i].name === "main" || res[i].name === "master") {
              master = gitgraph.branch(res[i].name).commit("");
            } else {
              branches.push(res[i]);
            }
          }

          branches.forEach(element => {
            if (element.merged) {
              let branch = master.branch(element.name).commit("")
              master.merge(branch)  
            } else {
              master.branch(element).commit("")
            }
          })
        })
    }
  }
    </Gitgraph>
  </>;
};
export default BranchTree;