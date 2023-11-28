package com.callmezydd.schedulerinfo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Locomotif {
    private String locoCode;
    private String locoName;
    private String locoDimension;
    private String status;
    private String time;
}
