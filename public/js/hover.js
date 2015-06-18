//TWC 30+ Channels 
$('#twc_30').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_30_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC 70+ Channels
 $('#twc_70').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_70_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });
    



//TWC Start Over
 $('#twc_startover').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_so_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });
    

//TWC Start Over
 $('#twc_lookback').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_lb_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC HD
 $('#twc_hd').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_hd_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });



//TWC Free On Demand
 $('#twc_od').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_od_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC Variety Tier
 $('#twc_vt').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_vt_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC Choice Tier
 $('#twc_ct').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_ct_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });



//TWC DVR
 $('#twc_dvr').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_dvr_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC Espanol Tier
 $('#twc_esp').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_esp_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC HD Channels
 $('#twc_hdc').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_hdc_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });



//TWC Premium Channels
 $('#twc_prem').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_prem_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC Movie Pass 
 $('#twc_mp').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_mp_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC Sports Pass 
 $('#twc_sports').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_sports_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC HD Pass 
 $('#twc_hdp').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_hdp_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//Charter On Demand
 $('#ch_od').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#ch_od_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//Charter Interactive Guide
 $('#ch_ig').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#ch_ig_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//Charter Interactive Guide
 $('#ch_dvr').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#ch_dvr_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//Charter WiFi
 $('#ch_wifi').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#ch_wifi_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });



