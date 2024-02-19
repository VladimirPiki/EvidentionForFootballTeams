<?php

require_once "POJO/leagues.php";

class LeaguesDAO extends Leagues
{
    private $table_name = "leagues";
    private $database = null;

    public function __construct($DB)
    {
        $this->database = $DB;
    }

    public function insertLeagues()
    {
        // $id = parent::getId();
        $original_name = parent::getOriginalName();
        $alternative_name = parent::getAlternativeName();
        $priority_default = parent::getPriorityDefault();
        $priority_custom = parent::getPriorityCustom();
        $template = parent::getTemplate();
        $number_of_sets = parent::getNumberOfSets();
        $sport = parent::getSport();
        $code_range = parent::getCodeRange();
        $subtitle = parent::getSubtitle();
        $region_id = parent::getRegionId();
        $zone_id = parent::getZoneId();
        $statistics_code = parent::getStatisticsCode();
        $statistics_group = parent::getStatisticsGroup();
        $statistics_name_new = parent::getStatisticsNameNew();
        $percent = parent::getPercent();
        $percent_ggng = parent::getPercentGgng();
        $odds_group = parent::getOddsGroup();
        $efID = parent::getEfID();
        $apiFoot_id = parent::getApiFootId();
        $results = parent::getResults();
        $extra_type_template_id = parent::getExtraTypeTemplateId();

        $columns = "original_name,alternative_name,priority_default,priority_custom,template,number_of_sets,sport,code_range,subtitle,region_id,zone_id,statistics_code,statistics_group,statistics_name_new,percent,percent_ggng,odds_group,efID,apiFoot_id,results,extra_type_template_id";
        $columns_value = "'$original_name','$alternative_name',$priority_default,$priority_custom,$template,$number_of_sets,$sport,'$code_range','$subtitle',$region_id,'$zone_id','$statistics_code','$statistics_group','$statistics_name_new','$percent','$percent_ggng',$odds_group,$efID,$apiFoot_id,$results,$extra_type_template_id";

        return $this->database->insertRow($this->table_name, $columns, $columns_value);
    }

    public function selectLeagues()
    {
        return $this->database->selectRow($this->table_name);
    }

    public function deleteLeagues()
    {
        $pk_name = "id";
        $pk_value = parent::getId();

        return $this->database->deleteRow($this->table_name, $pk_name, $pk_value);
    }

    public function updateLeagues()
    {
        $original_name = parent::getOriginalName();
        $alternative_name = parent::getAlternativeName();
        $priority_default = parent::getPriorityDefault();
        $priority_custom = parent::getPriorityDefault();
        $template = parent::getTemplate();
        $number_of_sets = parent::getNumberOfSets();
        $sport = parent::getSport();
        $code_range = parent::getCodeRange();
        $subtitle = parent::getSubtitle();
        $region_id = parent::getRegionId();
        $zone_id = parent::getZoneId();
        $statistics_code = parent::getStatisticsCode();
        $statistics_group = parent::getStatisticsGroup();
        $statistics_name_new = parent::getStatisticsNameNew();
        $percent = parent::getPercent();
        $percent_ggng = parent::getPercentGgng();
        $odds_group = parent::getOddsGroup();
        $efID = parent::getEfID();
        $apiFoot_id = parent::getApiFootId();
        $results = parent::getResults();
        $extra_type_template_id = parent::getExtraTypeTemplateId();

        $pk_name = "id";
        $pk_value = parent::getId();

        $columns = "original_name='$original_name',alternative_name='$alternative_name',priority_default=$priority_default,priority_custom=$priority_custom,
        template=$template,number_of_sets=$number_of_sets,sport=$sport,code_range='$code_range',subtitle='$subtitle',region_id=$region_id,
        zone_id=$zone_id,statistics_code='$statistics_code',statistics_group='$statistics_group',statistics_name_new='$statistics_name_new',percent='$percent',
        percent_ggng='$percent_ggng',odds_group=$odds_group,efID=$efID,apiFoot_id=$apiFoot_id,results=$results,extra_type_template_id=$extra_type_template_id";

        return $this->database->updateRow($this->table_name, $columns, $pk_name, $pk_value);
    }

    public function selectLeaguesCallStoredProcedure()
    {
        return $this->database->selectRowStoredProcedure("_select_leagues_last");
    }
}
