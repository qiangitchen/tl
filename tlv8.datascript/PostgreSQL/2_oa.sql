-- Create table
create table OA_DC_RECVDOC
(
  FID                VARCHAR(32) not null,
  VERSION            int,
  FDOCNUMBER         VARCHAR(100),
  FTITLE             VARCHAR(150),
  FDOCSOURCEDEPT     VARCHAR(100),
  FDOCSOURCEDATE     timestamp,
  FDOCCOPIES         int,
  FPAGECOUNT         VARCHAR(10),
  FDOCTYPE           VARCHAR(100),
  FURGENCY           VARCHAR(10),
  FCONFIDENTIALITY   VARCHAR(10),
  FDOCRECVNO         VARCHAR(100),
  FDOCRECVDATE       timestamp,
  FREMARK            VARCHAR(2000),
  FATTACHMENT        VARCHAR(2000),
  FCREATEOGNID       VARCHAR(32),
  FCREATEOGNNAME     VARCHAR(64),
  FCREATEDEPTID      VARCHAR(32),
  FCREATEDEPTNAME    VARCHAR(64),
  FCREATEPOSID       VARCHAR(32),
  FCREATEPOSNAME     VARCHAR(64),
  FCREATEPERSONID    VARCHAR(32),
  FCREATEPERSONNAME  VARCHAR(64),
  FCREATEPERSONFID   VARCHAR(512),
  FCREATEPERSONFNAME VARCHAR(1024),
  FCREATETIME        timestamp
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_DC_RECVDOC
  add constraint OA_DC_RECVDOC_KEY primary key (FID);
  
-- Create table
create table OA_DC_SENDDOC
(
  FID                VARCHAR(32) not null,
  VERSION            int,
  FTITLE             VARCHAR(150),
  FTYPE              VARCHAR(100),
  FDOCNUMBER         VARCHAR(100),
  FURGENCY           VARCHAR(10),
  FCONFIDENTIALITY   VARCHAR(10),
  FPAGECOUNT         VARCHAR(10),
  FPRINTCOUNT        VARCHAR(10),
  FMAINDEPT          VARCHAR(2000),
  FCOPYDEPT          VARCHAR(2000),
  FSENDDATE          timestamp,
  FCREATEOGNID       VARCHAR(32),
  FCREATEOGNNAME     VARCHAR(64),
  FCREATEDEPTID      VARCHAR(32),
  FCREATEDEPTNAME    VARCHAR(64),
  FCREATEPOSID       VARCHAR(32),
  FCREATEPOSNAME     VARCHAR(64),
  FCREATEPERSONID    VARCHAR(32),
  FCREATEPERSONNAME  VARCHAR(64),
  FCREATEPERSONFID   VARCHAR(512),
  FCREATEPERSONFNAME VARCHAR(1024),
  FCREATETIME        timestamp,
  FATTACHMENT        VARCHAR(4000),
  FDOCFILE           VARCHAR(1000)
);
-- Add comments to the columns 
comment on column OA_DC_SENDDOC.FTITLE
  is '??????';
comment on column OA_DC_SENDDOC.FTYPE
  is '????????????';
comment on column OA_DC_SENDDOC.FDOCNUMBER
  is '??????';
comment on column OA_DC_SENDDOC.FURGENCY
  is '??????';
comment on column OA_DC_SENDDOC.FPRINTCOUNT
  is '????????????';
comment on column OA_DC_SENDDOC.FMAINDEPT
  is '??????';
comment on column OA_DC_SENDDOC.FCOPYDEPT
  is '??????';
comment on column OA_DC_SENDDOC.FSENDDATE
  is '????????????';
comment on column OA_DC_SENDDOC.FATTACHMENT
  is '??????';
comment on column OA_DC_SENDDOC.FDOCFILE
  is '??????';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_DC_SENDDOC
  add constraint OA_DC_SENDDOC_KEY primary key (FID);

-- Create table
create table OA_EM_RECEIVEEMAIL
(
  FID            VARCHAR(100) not null,
  VERSION        int,
  FEMAILNAME     VARCHAR(100),
  FTEXT          text,
  FFJID          VARCHAR(4000),
  FSENDPERNAME   VARCHAR(100),
  FSENDPERID     VARCHAR(100),
  FREPLYSTATE    VARCHAR(100),
  FQUREY         VARCHAR(100),
  FCONSIGNEE     VARCHAR(100),
  FCONSIGNEEID   VARCHAR(100),
  FCONSIGNEECODE VARCHAR(100),
  FSENDTIME      timestamp,
  FSENDPERCODE   VARCHAR(100),
  FSENDOGN       VARCHAR(100),
  FSENDDEPT      VARCHAR(100),
  FCOLLECT       VARCHAR(10) DEFAULT '0'
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_EM_RECEIVEEMAIL
  add constraint OA_EM_RECEIVEEMAIL_KEY primary key (FID);

-- Create table
create table OA_EM_SENDEMAIL
(
  FID            VARCHAR(100) not null,
  VERSION        int,
  FEMAILNAME     VARCHAR(200),
  FCONSIGNEE     text,
  FTEXT          text,
  FSTATE         VARCHAR(100),
  FCONSIGNEEID   text,
  FCONSIGNEECODE text,
  FFJID          VARCHAR(4000),
  FSENDPERNAME   VARCHAR(100),
  FSENDPERID     VARCHAR(100),
  FCREATTIME     timestamp,
  FSENDTIME      timestamp,
  FSENDPERCODE   VARCHAR(100),
  FSENDOGN       VARCHAR(100),
  FSENDDEPT      VARCHAR(100),
  FCOLLECT       VARCHAR(10) DEFAULT '0'
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_EM_SENDEMAIL
  add constraint OA_EM_SENDEMAIL_KEY primary key (FID);

-- Create table
create table OA_FLOWCONCLUSION
(
  FID             VARCHAR(32),
  FCONCLUSIONNAME VARCHAR(4000),
  FORDER          INTEGER,
  FCREATORID      VARCHAR(100),
  FCREATOR        VARCHAR(100),
  VERSION         INTEGER
);
-- Add comments to the columns 
comment on column OA_FLOWCONCLUSION.FCONCLUSIONNAME
  is '????????????';
comment on column OA_FLOWCONCLUSION.FORDER
  is '??????';
comment on column OA_FLOWCONCLUSION.FCREATORID
  is '?????????ID';
comment on column OA_FLOWCONCLUSION.FCREATOR
  is '?????????';
  
-- Create table
create table OA_FLOWRECORD
(
  FID             VARCHAR(32) not null,
  FNODENAME       VARCHAR(100),
  FAGREETEXT      VARCHAR(4000),
  FCREATEPERNAME  VARCHAR(100),
  FCREATEDEPTNAME VARCHAR(100),
  FCREATETIME     timestamp,
  FBILLID         VARCHAR(32),
  FCREATEDEPTID   VARCHAR(100),
  FCREATEPERID    VARCHAR(100),
  FNODEID         VARCHAR(100),
  VERSION         INTEGER,
  FOPVIEWID       VARCHAR(100),
  FTASKID         VARCHAR(100),
  FFLOWID         VARCHAR(100),
  FSIGN           text
);
-- Add comments to the columns 
comment on column OA_FLOWRECORD.FNODENAME
  is '????????????';
comment on column OA_FLOWRECORD.FAGREETEXT
  is '????????????';
comment on column OA_FLOWRECORD.FCREATEPERNAME
  is '?????????';
comment on column OA_FLOWRECORD.FCREATEDEPTNAME
  is '????????????';
comment on column OA_FLOWRECORD.FCREATETIME
  is '????????????';
comment on column OA_FLOWRECORD.FBILLID
  is '??????ID';
comment on column OA_FLOWRECORD.FCREATEDEPTID
  is '??????ID';
comment on column OA_FLOWRECORD.FCREATEPERID
  is '??????ID';
comment on column OA_FLOWRECORD.FNODEID
  is '????????????';
comment on column OA_FLOWRECORD.FOPVIEWID
  is '????????????div id';
comment on column OA_FLOWRECORD.FTASKID
  is '??????id';
comment on column OA_FLOWRECORD.FFLOWID
  is '??????id';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_FLOWRECORD
  add constraint OA_FLOWRECORD_KEY primary key (FID);
  
-- Create table
create table OA_KM_KNOWLEDGE
(
  FID             VARCHAR(36) not null,
  VERSION         int,
  FCREATEOGNID    VARCHAR(36),
  FCREATEOGNNAME  VARCHAR(64),
  FCREATEDEPTID   VARCHAR(36),
  FCREATEDEPTNAME VARCHAR(64),
  FCREATEPSNID    VARCHAR(36),
  FCREATEPSNNAME  VARCHAR(64),
  FCREATETIME     timestamp,
  FNOTICETYPE     VARCHAR(30),
  FSENDTYPE       int,
  FPOSTEDRANGE    VARCHAR(4000),
  FTITLE          VARCHAR(200),
  FSENDDATE       timestamp,
  FCONTENT        VARCHAR(4000),
  FATTACHMENT     text,
  FSENDSTATUS     int,
  FDEPTCHECK      VARCHAR(4000),
  FOFFICECHECK    VARCHAR(4000),
  FLEADERCHECK    VARCHAR(4000),
  FPOSTEDRANGEID  VARCHAR(4000)
);
-- Add comments to the table 
comment on table OA_KM_KNOWLEDGE
  is '????????????';
-- Add comments to the columns 
comment on column OA_KM_KNOWLEDGE.FNOTICETYPE
  is '??????????????????';
comment on column OA_KM_KNOWLEDGE.FSENDTYPE
  is '????????????';
comment on column OA_KM_KNOWLEDGE.FPOSTEDRANGE
  is '????????????';
comment on column OA_KM_KNOWLEDGE.FTITLE
  is '??????';
comment on column OA_KM_KNOWLEDGE.FSENDDATE
  is '????????????';
comment on column OA_KM_KNOWLEDGE.FCONTENT
  is '??????';
comment on column OA_KM_KNOWLEDGE.FATTACHMENT
  is '??????';
comment on column OA_KM_KNOWLEDGE.FSENDSTATUS
  is '????????????:0????????????1??????';
comment on column OA_KM_KNOWLEDGE.FDEPTCHECK
  is '??????????????????';
comment on column OA_KM_KNOWLEDGE.FOFFICECHECK
  is '?????????????????????';
comment on column OA_KM_KNOWLEDGE.FLEADERCHECK
  is '????????????????????????';
comment on column OA_KM_KNOWLEDGE.FPOSTEDRANGEID
  is '????????????ID';
  
-- Create table
create table OA_KM_KNOWLEDGERANGE
(
  FID           VARCHAR(32),
  FBILLID       VARCHAR(32),
  FFULLID       VARCHAR(1024),
  FFULLNAME     VARCHAR(1024),
  FCREATORID    VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDATE   timestamp,
  VERSION       INTEGER,
  FNAME         VARCHAR(100)
);
-- Add comments to the columns 
comment on column OA_KM_KNOWLEDGERANGE.FID
  is '??????';
comment on column OA_KM_KNOWLEDGERANGE.FBILLID
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FFULLID
  is '??????FID';
comment on column OA_KM_KNOWLEDGERANGE.FFULLNAME
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FCREATORID
  is '?????????ID';
comment on column OA_KM_KNOWLEDGERANGE.FCREATOR
  is '?????????';
comment on column OA_KM_KNOWLEDGERANGE.FCREATEDEPTID
  is '????????????ID';
comment on column OA_KM_KNOWLEDGERANGE.FCREATEDEPT
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FCREATEDATE
  is '????????????';
comment on column OA_KM_KNOWLEDGERANGE.FNAME
  is '??????';
  
-- Create table
create table OA_NOTICE_PERSON
(
  FID             VARCHAR(64) not null,
  VERSION         INTEGER,
  FOGNID          VARCHAR(64),
  FOGNNAME        VARCHAR(200),
  FORGID          VARCHAR(64),
  FORGNAME        VARCHAR(200),
  FCREATEID       VARCHAR(64),
  FCREATENAME     VARCHAR(200),
  FCREATEDATETIME timestamp,
  FPERSONID       VARCHAR(64),
  FPERSONNAME     VARCHAR(200),
  FREADDATE       timestamp,
  FPERSONFNAME    VARCHAR(500),
  FMAINID         VARCHAR(64),
  FBROWSE         VARCHAR(5),
  FDEPTNAME       VARCHAR(100),
  FDEPTID         VARCHAR(100)
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_NOTICE_PERSON
  add constraint OA_NOTICE_PERSON_KEY primary key (FID);
  
-- Create table
create table OA_PUB_DOCPIGEONHOLE
(
  FID           VARCHAR(32) not null,
  FNAME         VARCHAR(100),
  FPARENTID     VARCHAR(32),
  FTABLENAME    VARCHAR(100),
  FBILLID       VARCHAR(32),
  FURL          VARCHAR(1024),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATORID    VARCHAR(100),
  FCREATEDATE   timestamp default now(),
  VERSION       INTEGER default 0,
  FFID          VARCHAR(1024),
  FFNAME        VARCHAR(1024)
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PUB_DOCPIGEONHOLE
  add constraint OA_PUB_DOCPIGEONHOLE_KEY primary key (FID);

-- Create table
create table OA_PUB_DOCPIGPERM
(
  FID           VARCHAR(32) not null,
  FFOLDERID     VARCHAR(100),
  FPERGORGFID   VARCHAR(1024),
  FPERGORG      VARCHAR(1024),
  FJURISDICTION int,
  FCREATORID    VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDATE   timestamp,
  VERSION       INTEGER
);
-- Add comments to the table 
comment on table OA_PUB_DOCPIGPERM
  is '??????????????????';
-- Add comments to the columns 
comment on column OA_PUB_DOCPIGPERM.FFOLDERID
  is '??????ID';
comment on column OA_PUB_DOCPIGPERM.FPERGORGFID
  is '??????orgfid';
comment on column OA_PUB_DOCPIGPERM.FPERGORG
  is '??????org';
comment on column OA_PUB_DOCPIGPERM.FJURISDICTION
  is '??????';
comment on column OA_PUB_DOCPIGPERM.FCREATORID
  is '?????????ID';
comment on column OA_PUB_DOCPIGPERM.FCREATOR
  is '?????????';
comment on column OA_PUB_DOCPIGPERM.FCREATEDEPTID
  is '????????????ID';
comment on column OA_PUB_DOCPIGPERM.FCREATEDEPT
  is '????????????';
comment on column OA_PUB_DOCPIGPERM.FCREATEDATE
  is '????????????';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PUB_DOCPIGPERM
  add constraint YJOA_OA_PUB_DOCPIGPERM_KEY primary key (FID);
  
-- Create table
create table OA_PULICNOTICE
(
  FID             VARCHAR(64) not null,
  VERSION         INTEGER,
  FOGNID          VARCHAR(64),
  FOGNNAME        VARCHAR(200),
  FORGID          VARCHAR(64),
  FORGNAME        VARCHAR(200),
  FCREATEID       VARCHAR(64),
  FCREATENAME     VARCHAR(200),
  FCREATEDATETIME timestamp,
  FPUSHDATETIME   timestamp,
  FTITLE          VARCHAR(200),
  FCONTENT        text,
  FCREATEDATE     timestamp,
  FPUSHID         VARCHAR(64),
  FPUSHNAME       VARCHAR(200),
  FTYPE           VARCHAR(100),
  FATTFILE        VARCHAR(400)
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PULICNOTICE
  add constraint OA_PULICNOTICE_KEY primary key (FID);
  
create table OA_RE_DAYREPORT
(
  FID                VARCHAR(64),
  VERSION            int,
  FTITLE             VARCHAR(1024),
  FCREATEOGNID       VARCHAR(64),
  FCREATEOGNNAME     VARCHAR(200),
  FCREATEDEPTID      VARCHAR(64),
  FCREATEDEPTNAME    VARCHAR(200),
  FCREATEPOSID       VARCHAR(64),
  FCREATEPOSNAME     VARCHAR(200),
  FCREATEPERSONID    VARCHAR(64),
  FCREATEPERSONNAME  VARCHAR(200),
  FCREATEPERSONFID   VARCHAR(1024),
  FCREATEPERSONFNAME VARCHAR(2048),
  FCREATETIME        timestamp,
  FPUSHDATETIME      timestamp,
  FFILE              VARCHAR(1000),
  FCONTEXT           text
);
alter table OA_RE_DAYREPORT
  add constraint OA_RE_DAYREPORT_KEY primary key (FID);
  
create table OA_RE_DAYREPORTDETAIL
(
  FID             VARCHAR(100),
  VERSION         int,
  FMASTERID       VARCHAR(100),
  FCONTENT        text,
  FPLANDATE       timestamp,
  FOTHERPERSON    VARCHAR(2000),
  FCOMPLETE       VARCHAR(1024),
  FREMARK         VARCHAR(1024),
  FCOMPLETEREMARK VARCHAR(1024),
  FCREATETIME     timestamp
);
alter table OA_RE_DAYREPORTDETAIL
  add constraint OA_RE_DAYREPORTDETAIL_KEY primary key (FID);
  
create table OA_RE_MONTHREPORT
(
  FID                VARCHAR(100),
  VERSION            INTEGER,
  FTITLE             VARCHAR(1000),
  FCREATEOGNID       VARCHAR(64),
  FCREATEOGNNAME     VARCHAR(200),
  FCREATEDEPTID      VARCHAR(64),
  FCREATEDEPTNAME    VARCHAR(200),
  FCREATEPOSID       VARCHAR(64),
  FCREATEPOSNAME     VARCHAR(200),
  FCREATEPERSONID    VARCHAR(64),
  FCREATEPERSONNAME  VARCHAR(200),
  FCREATEPERSONFID   VARCHAR(1024),
  FCREATEPERSONFNAME VARCHAR(1024),
  FCREATETIME        timestamp,
  FPUSHDATETIME      timestamp,
  FFILE              VARCHAR(1000),
  FCONTEXT           text
);
alter table OA_RE_MONTHREPORT
  add constraint OA_RE_MONTHREPORT_KEY primary key (FID);
  
create table OA_RE_WEEKREPORT
(
  FID                VARCHAR(100),
  VERSION            int,
  FTITLE             VARCHAR(1000),
  FCREATEOGNID       VARCHAR(64),
  FCREATEOGNNAME     VARCHAR(200),
  FCREATEDEPTID      VARCHAR(64),
  FCREATEDEPTNAME    VARCHAR(200),
  FCREATEPOSID       VARCHAR(64),
  FCREATEPOSNAME     VARCHAR(200),
  FCREATEPERSONID    VARCHAR(64),
  FCREATEPERSONNAME  VARCHAR(200),
  FCREATEPERSONFID   VARCHAR(1024),
  FCREATEPERSONFNAME VARCHAR(1024),
  FCREATETIME        timestamp,
  FPUSHDATETIME      timestamp,
  FFILE              VARCHAR(1000),
  FCONTEXT           text
);
alter table OA_RE_WEEKREPORT
  add constraint OA_RE_WEEKREPORT_KEY primary key (FID);
  
create table OA_RE_WEEKREPORTDETAIL
(
  FID             VARCHAR(4000),
  VERSION         int,
  FMASTERID       VARCHAR(4000),
  FCONTENT        VARCHAR(4000),
  FPLANDATE       timestamp,
  FOTHERPERSON    VARCHAR(4000),
  FCOMPLETE       VARCHAR(4000),
  FREMARK         VARCHAR(4000),
  FCOMPLETEREMARK VARCHAR(4000),
  FCREATETIME     timestamp
);
alter table OA_RE_WEEKREPORTDETAIL
  add constraint OA_RE_WEEKREPORTDETAIL_KEY primary key (FID);
  
create table OA_WORK_PLAN_PERSON
(
  FID             VARCHAR(4000),
  VERSION         int,
  FOGNID          VARCHAR(4000),
  FOGNNAME        VARCHAR(4000),
  FORGID          VARCHAR(4000),
  FORGNAME        VARCHAR(4000),
  FCREATEID       VARCHAR(4000),
  FCREATENAME     VARCHAR(4000),
  FCREATEDATETIME timestamp,
  FPERSONID       VARCHAR(4000),
  FPERSONNAME     VARCHAR(4000),
  FREADDATE       timestamp,
  FPERSONFNAME    VARCHAR(4000),
  FMAINID         VARCHAR(4000),
  FBROWSE         VARCHAR(2000),
  FOPINION        VARCHAR(4000)
);
alter table OA_WORK_PLAN_PERSON
  add constraint OA_WORK_PLAN_PERSON_KEY primary key (FID);
  
create table OA_WP_MONTHPLAN
(
  FID                    VARCHAR(100) not null,
  VERSION                INTEGER,
  FOGNID                 VARCHAR(64),
  FOGNNAME               VARCHAR(200),
  FORGID                 VARCHAR(64),
  FORGNAME               VARCHAR(200),
  FCREATEID              VARCHAR(64),
  FCREATENAME            VARCHAR(200),
  FCREATEDATETIME        timestamp,
  FPUSHDATETIME          timestamp,
  FPUSHID                VARCHAR(64),
  FPUSHNAME              VARCHAR(200),
  FTARGETFINISHCONDITION VARCHAR(100),
  FUNFINISHEDCAUSE       VARCHAR(100),
  FWINTHROUGHMETHOD      VARCHAR(100),
  FINNOVATEHARVEST       VARCHAR(100),
  FTITLE                 VARCHAR(200),
  PLANPERSON             VARCHAR(50)
);
alter table OA_WP_MONTHPLAN
  add constraint OA_WP_MONTHPLAN_KEY primary key (FID);
  
create table OA_WP_MONTHPLAN_DETAIL
(
  FID                VARCHAR(100),
  VERSION            int,
  FOGNID             VARCHAR(64),
  FOGNNAME           VARCHAR(200),
  FORGID             VARCHAR(64),
  FORGNAME           VARCHAR(200),
  FCREATEID          VARCHAR(64),
  FCREATENAME        VARCHAR(200),
  FCREATEDATETIME    timestamp,
  FSIGNIFICANCEGRADE VARCHAR(100),
  FTARGETCONTENT     VARCHAR(200),
  FMETHODMEASURE     VARCHAR(200),
  FACCOMPLISH        VARCHAR(100),
  FMAINID            VARCHAR(100),
  FOPINION           VARCHAR(100),
  FORDERTIME         timestamp,
  FCOMPLETE          VARCHAR(100)
);
alter table OA_WP_MONTHPLAN_DETAIL
  add constraint OA_WP_MONTHPLAN_DETAIL_KEY primary key (FID);
  
create table OA_WP_WEEKPLAN
(
  FID             VARCHAR(100),
  VERSION         int,
  FOGNID          VARCHAR(64),
  FOGNNAME        VARCHAR(200),
  FORGID          VARCHAR(64),
  FORGNAME        VARCHAR(200),
  FCREATEID       VARCHAR(64),
  FCREATENAME     VARCHAR(200),
  FCREATEDATETIME timestamp,
  FPUSHDATETIME   timestamp,
  FPUSHID         VARCHAR(100),
  FPUSHNAME       VARCHAR(200),
  FTITLE          VARCHAR(1000),
  STARTTIME       timestamp,
  FINISHTIME      timestamp,
  PLANPERSON      VARCHAR(100),
  FAPPROVALPSNID  VARCHAR(100),
  FCONTENT        text
);
alter table OA_WP_WEEKPLAN
  add constraint OA_WP_WEEKPLAN_KEY primary key (FID);
  
create table OA_WP_WEEKPLAN_DETAIL
(
  FID                   VARCHAR(100) not null,
  VERSION               INTEGER,
  FOGNID                VARCHAR(64),
  FOGNNAME              VARCHAR(200),
  FORGID                VARCHAR(64),
  FORGNAME              VARCHAR(200),
  FCREATEID             VARCHAR(64),
  FCREATENAME           VARCHAR(200),
  FCREATEDATETIME       timestamp,
  MONTHLY               VARCHAR(50),
  PROJECTNAME           VARCHAR(100),
  SERIALNUMBER          VARCHAR(20),
  JOBCONTENT            VARCHAR(200),
  DEPARTMENTCOOPERATION VARCHAR(200),
  COMPLETIONEVALUATION  VARCHAR(200),
  COMPLETECONDITION     VARCHAR(50),
  UNFINISHEDCAUSE       VARCHAR(200),
  AUDITOR               VARCHAR(20),
  MAINID                VARCHAR(100),
  STARTTIME             timestamp,
  FINISHTIME            timestamp,
  SORT                  int,
  PLANTYPE              VARCHAR(20),
  FCONTENT              VARCHAR(50),
  ACCOMPLISH            VARCHAR(50),
  FCOMPLETTIME          timestamp,
  FIMPORTANT            VARCHAR(100)
);
alter table OA_WP_WEEKPLAN_DETAIL
  add constraint OA_WP_WEEKPLAN_DETAIL_KEY primary key (FID);
  
-- Create table
create table OA_PUB_EXECUTE
(
  FID             VARCHAR(32) not null,
  FMASTERID       VARCHAR(100),
  FTASKID         VARCHAR(100),
  FACTIVITYNAME   VARCHAR(500),
  FACTIVITYLABEL  VARCHAR(1000),
  FOPINION        VARCHAR(1024),
  FSTATE          VARCHAR(100),
  FSTATENAME      VARCHAR(100),
  FCREATEPSNID    VARCHAR(64),
  FCREATEPSNNAME  VARCHAR(100),
  FCREATEPSNFID   VARCHAR(1024),
  FCREATEPSNFNAME VARCHAR(2048),
  FCREATETIME     date,
  VERSION         int
);
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_PUB_EXECUTE
  add constraint OA_PUB_EXECUTE_key primary key (FID);
  
-- Create table
create table OA_DOC_REDHEADPERM
(
  FID           VARCHAR(32) not null,
  FTYPE         VARCHAR(100),
  FNAME         VARCHAR(100),
  FRHFILE       VARCHAR(1024),
  FOGNID        VARCHAR(100),
  FOGNNAME      VARCHAR(100),
  FCREATORID    VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDATE   timestamp,
  VERSION       INTEGER
);

-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_DOC_REDHEADPERM
  add constraint OA_DOC_REDHEADPERM_key primary key (FID);
-- Create/Recreate indexes 
create index oa_redhead_ognid on OA_DOC_REDHEADPERM (FOGNID);

-- Add comments to the table 
comment on table OA_DOC_REDHEADPERM
  is '??????????????????';
-- Add comments to the columns 
comment on column OA_DOC_REDHEADPERM.FTYPE
  is '??????';
comment on column OA_DOC_REDHEADPERM.FNAME
  is '??????';
comment on column OA_DOC_REDHEADPERM.FRHFILE
  is '??????';
comment on column OA_DOC_REDHEADPERM.FOGNID
  is '??????id';
comment on column OA_DOC_REDHEADPERM.FOGNNAME
  is '????????????';
comment on column OA_DOC_REDHEADPERM.FCREATORID
  is '?????????ID';
comment on column OA_DOC_REDHEADPERM.FCREATOR
  is '?????????';
comment on column OA_DOC_REDHEADPERM.FCREATEDEPTID
  is '????????????ID';
comment on column OA_DOC_REDHEADPERM.FCREATEDEPT
  is '????????????';
comment on column OA_DOC_REDHEADPERM.FCREATEDATE
  is '????????????';
  
-- Create table
create table OA_ADM_MYGROUPFROM
(
  FID           VARCHAR(32) not null,
  FCREATORID    VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDATE   timestamp,
  FOUTKEY       VARCHAR(32),
  FPERSONID     VARCHAR(32),
  FPERSONNAME   VARCHAR(200),
  VERSION       INTEGER
);
alter table OA_ADM_MYGROUPFROM
  add constraint OA_ADM_MYGROUPFROM_key primary key (FID);
-- Add comments to the columns 
comment on column OA_ADM_MYGROUPFROM.FCREATORID
  is '?????????ID';
comment on column OA_ADM_MYGROUPFROM.FCREATOR
  is '?????????';
comment on column OA_ADM_MYGROUPFROM.FCREATEDEPTID
  is '???????????????ID';
comment on column OA_ADM_MYGROUPFROM.FCREATEDEPT
  is '???????????????';
comment on column OA_ADM_MYGROUPFROM.FCREATEDATE
  is '??????????????????';
comment on column OA_ADM_MYGROUPFROM.FOUTKEY
  is '??????';
comment on column OA_ADM_MYGROUPFROM.FPERSONID
  is '?????????ID';
comment on column OA_ADM_MYGROUPFROM.FPERSONNAME
  is '???????????????';
  
-- Create table
create table OA_ADM_MYGROUPMAIN
(
  FID           VARCHAR(32) not null,
  FCREATORID    VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDATE   timestamp,
  FGROUPNAME    VARCHAR(200),
  VERSION       INTEGER
);
alter table OA_ADM_MYGROUPMAIN
  add constraint OA_ADM_MYGROUPMAIN_key primary key (FID);
-- Add comments to the columns 
comment on column OA_ADM_MYGROUPMAIN.FCREATORID
  is '?????????ID';
comment on column OA_ADM_MYGROUPMAIN.FCREATOR
  is '?????????';
comment on column OA_ADM_MYGROUPMAIN.FCREATEDEPTID
  is '???????????????ID';
comment on column OA_ADM_MYGROUPMAIN.FCREATEDEPT
  is '???????????????';
comment on column OA_ADM_MYGROUPMAIN.FCREATEDATE
  is '??????????????????';
comment on column OA_ADM_MYGROUPMAIN.FGROUPNAME
  is '????????????';
  
-- Create table
create table OA_HR_WARG
(
  FID           VARCHAR(32) not null,
  VERSION       INTEGER,
  FCREATORID    VARCHAR(100),
  FCREATOR      VARCHAR(100),
  FCREATEDEPTID VARCHAR(100),
  FCREATEDEPT   VARCHAR(100),
  FCREATEDATE   timestamp,
  FSCODE        VARCHAR(64),
  FPERSONNEME   VARCHAR(64),
  FPOSTWAGE     FLOAT,
  FLEVEWAGE     FLOAT,
  FBASEJX       FLOAT,
  FREFORM       FLOAT,
  FAWARDJX      FLOAT,
  FAGEWAGE      FLOAT,
  FRETURN       FLOAT,
  FONLYSON      FLOAT,
  FLEAVE        FLOAT,
  FOTHERSUM     FLOAT,
  FSHOULDPAY    FLOAT,
  FDUE          FLOAT,
  FHOUSE        FLOAT,
  FMEDICARE     FLOAT,
  FLOSSCARE     FLOAT,
  FOTHERDIV     FLOAT,
  FLOANDEBIT    FLOAT,
  FTAX          FLOAT,
  FDIVSUM       FLOAT,
  FPAYWAGE      FLOAT,
  FPAYDATE      VARCHAR(30),
  FWAGEYEAR     FLOAT,
  FWAGEMONTH    FLOAT,
  FJIJIANBUTIE  FLOAT,
  FYEBANFEI     FLOAT,
  FBEIZHU       VARCHAR(4000)
);
-- Add comments to the table 
comment on table OA_HR_WARG
  is '????????????';
-- Add comments to the columns 
comment on column OA_HR_WARG.FCREATORID
  is '?????????ID';
comment on column OA_HR_WARG.FCREATOR
  is '?????????';
comment on column OA_HR_WARG.FCREATEDEPTID
  is '????????????ID';
comment on column OA_HR_WARG.FCREATEDEPT
  is '????????????';
comment on column OA_HR_WARG.FCREATEDATE
  is '????????????';
comment on column OA_HR_WARG.FSCODE
  is '????????????';
comment on column OA_HR_WARG.FPERSONNEME
  is '??????';
comment on column OA_HR_WARG.FPOSTWAGE
  is '????????????';
comment on column OA_HR_WARG.FLEVEWAGE
  is '????????????';
comment on column OA_HR_WARG.FBASEJX
  is '???????????????????????????';
comment on column OA_HR_WARG.FREFORM
  is '???????????????';
comment on column OA_HR_WARG.FAWARDJX
  is '?????????????????????';
comment on column OA_HR_WARG.FAGEWAGE
  is '????????????';
comment on column OA_HR_WARG.FRETURN
  is '??????';
comment on column OA_HR_WARG.FONLYSON
  is '?????????';
comment on column OA_HR_WARG.FLEAVE
  is '?????????';
comment on column OA_HR_WARG.FOTHERSUM
  is '??????';
comment on column OA_HR_WARG.FSHOULDPAY
  is '????????????';
comment on column OA_HR_WARG.FDUE
  is '??????';
comment on column OA_HR_WARG.FHOUSE
  is '??????';
comment on column OA_HR_WARG.FMEDICARE
  is '??????';
comment on column OA_HR_WARG.FLOSSCARE
  is '??????';
comment on column OA_HR_WARG.FOTHERDIV
  is '?????????';
comment on column OA_HR_WARG.FLOANDEBIT
  is '?????????';
comment on column OA_HR_WARG.FTAX
  is '?????????';
comment on column OA_HR_WARG.FDIVSUM
  is '????????????';
comment on column OA_HR_WARG.FPAYWAGE
  is '????????????';
comment on column OA_HR_WARG.FPAYDATE
  is '??????';
comment on column OA_HR_WARG.FWAGEYEAR
  is '?????????';
comment on column OA_HR_WARG.FWAGEMONTH
  is '?????????';
comment on column OA_HR_WARG.FJIJIANBUTIE
  is '????????????';
comment on column OA_HR_WARG.FYEBANFEI
  is '?????????';
comment on column OA_HR_WARG.FBEIZHU
  is '??????';
-- Create/Recreate primary, unique and foreign key constraints 
alter table OA_HR_WARG
  add constraint OA_HR_WAGE_KEY primary key (FID);
  
create or replace view oa_notice_person_view as
select t.FID,
       t.VERSION,
       t.FOGNID,
       t.FOGNNAME,
       t.FORGID,
       t.FORGNAME,
       t.FCREATEID,
       t.FCREATENAME,
       t.FCREATEDATETIME,
       t.FPUSHDATETIME,
       t.FTITLE,
       t.FCONTENT,
       t.FCREATEDATE,
       t.FPUSHID,
       t.FPUSHNAME,
       t.FTYPE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_PULICNOTICE t
  left join OA_NOTICE_PERSON t1 on t.fid = t1.fmainid;
  
create or replace view look_month_work_plan as
select t.fid,
       t.FPUSHDATETIME,
       t.FPUSHID,
       t.FPUSHNAME,
       t.FCREATEID,
       t.FTITLE,
       t.FCREATENAME,
       t.forgid,
       t.forgname,
       t1.fpersonname,
       t.FCREATEDATETIME,
       t1.fpersonid,
       t1.fbrowse,
       t.version
  from OA_WP_MONTHPLAN t
  left join Oa_Work_Plan_Person t1
    on t.fid = t1.fmainid;
	
create or replace view look_week_work_plan as
select t.fid,
       t.FPUSHDATETIME,
       t.FPUSHID,
       t.FPUSHNAME,
       t.FCREATEID,
       t.FTITLE,
       t.FCREATENAME,
       t.FCONTENT,
       t.STARTTIME,
       t.finishtime,
       t.forgname,
       t1.fpersonname,
       t1.fpersonid,
       t1.fbrowse,
       t.version
  from OA_WP_WEEKPLAN t
  left join Oa_Work_Plan_Person t1
    on t.fid = t1.fmainid;

create or replace view show_oa_re_dayreport as
select t.FID,
       t.VERSION,
       t.FTITLE,
       t.FCREATEOGNID,
       t.FCREATEOGNNAME,
       t.FCREATEDEPTID,
       t.FCREATEDEPTNAME,
       t.FCREATEPOSID,
       t.FCREATEPOSNAME,
       t.FCREATEPERSONID,
       t.FCREATEPERSONNAME,
       t.FCREATEPERSONFID,
       t.FCREATEPERSONFNAME,
       t.FCREATETIME,
       t.FPUSHDATETIME,
       t.FFILE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_RE_DAYREPORT t
  left join OA_NOTICE_PERSON t1
    on t.fid = t1.fmainid;

create or replace view show_oa_re_monthreport as
select t.FID,
       t.VERSION,
       t.FTITLE,
       t.FCREATEOGNID,
       t.FCREATEOGNNAME,
       t.FCREATEDEPTID,
       t.FCREATEDEPTNAME,
       t.FCREATEPOSID,
       t.FCREATEPOSNAME,
       t.FCREATEPERSONID,
       t.FCREATEPERSONNAME,
       t.FCREATEPERSONFID,
       t.FCREATEPERSONFNAME,
       t.FCREATETIME,
       t.FPUSHDATETIME,
       t.FFILE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_RE_MONTHREPORT t
  left join OA_NOTICE_PERSON t1
    on t.fid = t1.fmainid;

create or replace view show_oa_re_weekreport as
select t.FID,
       t.VERSION,
       t.FTITLE,
       t.FCREATEOGNID,
       t.FCREATEOGNNAME,
       t.FCREATEDEPTID,
       t.FCREATEDEPTNAME,
       t.FCREATEPOSID,
       t.FCREATEPOSNAME,
       t.FCREATEPERSONID,
       t.FCREATEPERSONNAME,
       t.FCREATEPERSONFID,
       t.FCREATEPERSONFNAME,
       t.FCREATETIME,
       t.FPUSHDATETIME,
       t.FFILE,
       t1.fpersonid fpersonid,
       t1.fbrowse
  from OA_RE_WEEKREPORT t
  left join OA_NOTICE_PERSON t1
    on t.fid = t1.fmainid;  