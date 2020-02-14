// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from "react";
import { NavLink } from "react-router-dom";
import { FontIcon } from "office-ui-fabric-react";
import ConditionalNavLink from "../common/conditionalNavLink/conditionalNavLink";
import { strings } from "../../../common/strings";

/**
 * Side bar that remains visible throughout app experience
 * Contains links to editor, settings, export, etc.
 * @param param0 - {
 *      project - IProject
 * }
 */
export function Sidebar({ project }) {
    const projectId = project ? project.id : null;

    return (
        <div className="bg-lighter-2 app-sidebar" id="app-sidebar" >
            <ul>
                <li>
                    <NavLink title={"Home"} to={`/`} exact>
                        <FontIcon iconName="Home" />
                    </NavLink>
                </li>
                <li>
                    <ConditionalNavLink disabled={!projectId}
                        title={strings.tags.editor}
                        to={`/projects/${projectId}/edit`}>
                        <FontIcon iconName="Tag" />
                    </ConditionalNavLink>
                </li>
               <li>
                    <ConditionalNavLink disabled={!projectId}
                        title={strings.train.title}
                        to={`/projects/${projectId}/train`}>
                        <FontIcon iconName="MachineLearning" />
                    </ConditionalNavLink>
                </li>
                <li>
                    <ConditionalNavLink disabled={!projectId}
                        title={`Predict`}
                        to={`/projects/${projectId}/predict`}>
                        <FontIcon iconName="Insights" />
                    </ConditionalNavLink>
                </li>
                <li>
                    <ConditionalNavLink disabled={!projectId}
                        title={strings.projectSettings.title}
                        to={`/projects/${projectId}/settings`}>
                        <FontIcon iconName="DocumentManagement" />
                    </ConditionalNavLink>
                </li>
                <li>
                    <NavLink title={strings.connections.title} to={`/connections`}>
                        <FontIcon iconName="Plug" />
                    </NavLink>
                </li>
            </ul>
            <div className="app-sidebar-fill"></div>
            <ul>
                <li>
                    <NavLink title={strings.appSettings.title} to={`/settings`}>
                        <FontIcon iconName="Settings" />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
