package com.sample.react.service;

import java.util.Collection;

import org.jbpm.services.api.RuntimeDataService;
import org.jbpm.services.api.model.ProcessInstanceDesc;
import org.kie.api.runtime.query.QueryContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppRestController {

    @Autowired
    RuntimeDataService runtimeDataService;

    @GetMapping(path = "/processinstances", produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<ProcessInstanceDesc> getProcessInstancesInfo() {
        return runtimeDataService.getProcessInstances(new QueryContext());
    }
}
