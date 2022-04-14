import React from "react";

const Tabs = ({ dataset }) => {
  console.log(dataset);
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {dataset?.map((item, itemIdx) => (
            <button
              className={`nav-link ${itemIdx === 0 ? "active" : ""}`}
              id={item.tabid}
              data-bs-toggle="tab"
              data-bs-target={item.tabtarget}
              type="button"
              role="tab"
              aria-controls={item.tabcontrol}
              aria-selected={itemIdx === 0 ? "true" : "false"}
              key={itemIdx}
            >
              {item.tabname}
            </button>
          ))}
        </div>
      </nav>

      <div className="tab-content custom_tab_content" id="nav-tabContent">
        {dataset?.map((item, itemIdx) => (
          <div
            className={`tab-pane fade p-3 ${
              itemIdx === 0 ? "active show" : ""
            }`}
            id={item.targetid}
            role="tabpanel"
            aria-labelledby={item.labelledby}
            key={itemIdx}
          >
            <h2>{item.title}</h2>
            <h3 className="pt-3">Resume</h3>
            <p>Dalam materi ini, mempelajari:</p>
            <ol>
              {dataset[itemIdx].summaries?.map((summary, summaryIdx) => (
                <>
                  <li key={summaryIdx}>{summary.title}</li>
                  <div className="paragraph-content">{summary.description}</div>
                </>
              ))}
            </ol>

            <h3 className="pt-3">Task</h3>
            <ol>
              {dataset[itemIdx].tasks?.map((task, taskIdx) => (
                <>
                  <li key={taskIdx}>{task.title}</li>
                  <div className="paragraph-content">{task.description}</div>
                </>
              ))}
            </ol>

            <h3 className="pt-3">Link :</h3>
            {dataset[itemIdx].links?.map((link, linkIdx) => (
              <>
                <a href={link.url} key={linkIdx}>
                  {link.name}
                </a>
              </>
            ))}

            <h3 className="pt-3">Screenshots :</h3>
            {dataset[itemIdx].screenshots?.map((screenshot, screenshotIdx) => (
              <>
                <div className="task-images git-img" key={screenshotIdx}>
                  <img
                    src={screenshot.path}
                    alt={item.title}
                    className="task-img"
                  />
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
