<?php

class Leagues
{

    private $id;
    private $original_name;
    private $alternative_name;
    private $priority_default;
    private $priority_custom;
    private $template;
    private $number_of_sets;
    private $sport;
    private $code_range;
    private $subtitle;
    private $region_id;
    private $zone_id;
    private $statistics_code;
    private $statistics_group;
    private $statistics_name_new;
    private $percent;
    private $percent_ggng;
    private $odds_group;
    private $efID;
    private $apiFoot_id;
    private $results;
    private $extra_type_template_id;


    //setters
    /**
     * @param mixed $id
     * 
     * @return [type]
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $original_name
     * 
     * @return [type]
     */
    public function setOriginalName($original_name)
    {
        $this->original_name = $original_name;
    }

    /**
     * @param mixed $alternative_name
     * 
     * @return [type]
     */
    public function setAlternativeName($alternative_name)
    {
        $this->alternative_name = $alternative_name;
    }

    /**
     * @param mixed $priority_default
     * 
     * @return [type]
     */
    public function setPriorityDefault($priority_default)
    {
        $this->priority_default = $priority_default;
    }

    /**
     * @param mixed $priority_custom
     * 
     * @return [type]
     */
    public function setPriorityCustom($priority_custom)
    {
        $this->priority_custom = $priority_custom;
    }

    /**
     * @param mixed $template
     * 
     * @return [type]
     */
    public function setTemplate($template)
    {
        $this->template = $template;
    }

    /**
     * @param mixed $number_of_sets
     * 
     * @return [type]
     */
    public function setNumberOfSets($number_of_sets)
    {
        $this->number_of_sets = $number_of_sets;
    }

    /**
     * @param mixed $sport
     * 
     * @return [type]
     */
    public function setSport($sport)
    {
        $this->sport = $sport;
    }

    /**
     * @param mixed $code_range
     * 
     * @return [type]
     */
    public function setCodeRange($code_range)
    {
        $this->code_range = $code_range;
    }

    /**
     * @param mixed $subtitle
     * 
     * @return [type]
     */
    public function setSubtitle($subtitle)
    {
        $this->subtitle = $subtitle;
    }

    /**
     * @param mixed $region_id
     * 
     * @return [type]
     */
    public function setRegionId($region_id)
    {
        $this->region_id = $region_id;
    }

    /**
     * @param mixed $zone_id
     * 
     * @return [type]
     */
    public function setZoneId($zone_id)
    {
        $this->zone_id = $zone_id;
    }

    /**
     * @param mixed $statistics_code
     * 
     * @return [type]
     */
    public function setStatisticsCode($statistics_code)
    {
        $this->statistics_code = $statistics_code;
    }

    /**
     * @param mixed $statistics_group
     * 
     * @return [type]
     */
    public function setStatisticsGroup($statistics_group)
    {
        $this->statistics_group = $statistics_group;
    }

    /**
     * @param mixed $statistics_name_new
     * 
     * @return [type]
     */
    public function setStatisticsNameNew($statistics_name_new)
    {
        $this->statistics_name_new = $statistics_name_new;
    }

    /**
     * @param mixed $percent
     * 
     * @return [type]
     */
    public function setPercent($percent)
    {
        $this->percent = $percent;
    }

    /**
     * @param mixed $percent_ggng
     * 
     * @return [type]
     */
    public function setPercentGgng($percent_ggng)
    {
        $this->percent_ggng = $percent_ggng;
    }

    /**
     * @param mixed $odds_group
     * 
     * @return [type]
     */
    public function setOddsGroup($odds_group)
    {
        $this->odds_group = $odds_group;
    }

    /**
     * @param mixed $efID
     * 
     * @return [type]
     */
    public function setEfID($efID)
    {
        $this->efID = $efID;
    }

    /**
     * @param mixed $apiFoot_id
     * 
     * @return [type]
     */
    public function setApiFootId($apiFoot_id)
    {
        $this->apiFoot_id = $apiFoot_id;
    }

    /**
     * @param mixed $results
     * 
     * @return [type]
     */
    public function setResults($results)
    {
        $this->results = $results;
    }

    /**
     * @param mixed $extra_type_template_id
     * 
     * @return [type]
     */
    public function setExtraTypeTemplateId($extra_type_template_id)
    {
        $this->extra_type_template_id = $extra_type_template_id;
    }

    //getters
    /**
     * @return [type]
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return [type]
     */
    public function getOriginalName()
    {
        return $this->original_name;
    }

    /**
     * @return [type]
     */
    public function getAlternativeName()
    {
        return $this->alternative_name;
    }

    /**
     * @return [type]
     */
    public function getPriorityDefault()
    {
        return $this->priority_default;
    }

    /**
     * @return [type]
     */
    public function getPriorityCustom()
    {
        return $this->priority_custom;
    }

    /**
     * @return [type]
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * @return [type]
     */
    public function getNumberOfSets()
    {
        return $this->number_of_sets;
    }

    /**
     * @return [type]
     */
    public function getSport()
    {
        return $this->sport;
    }

    /**
     * @return [type]
     */
    public function getCodeRange()
    {
        return $this->code_range;
    }

    /**
     * @return [type]
     */
    public function getSubtitle()
    {
        return $this->subtitle;
    }

    /**
     * @return [type]
     */
    public function getRegionId()
    {
        return $this->region_id;
    }

    /**
     * @return [type]
     */
    public function getZoneId()
    {
        return $this->zone_id;
    }

    /**
     * @return [type]
     */
    public function getStatisticsCode()
    {
        return $this->statistics_code;
    }

    /**
     * @return [type]
     */
    public function getStatisticsGroup()
    {
        return $this->statistics_group;
    }

    /**
     * @return [type]
     */
    public function getStatisticsNameNew()
    {
        return $this->statistics_name_new;
    }

    /**
     * @return [type]
     */
    public function getPercent()
    {
        return $this->percent;
    }

    /**
     * @return [type]
     */
    public function getPercentGgng()
    {
        return $this->percent_ggng;
    }

    /**
     * @return [type]
     */
    public function getOddsGroup()
    {
        return $this->odds_group;
    }

    /**
     * @return [type]
     */
    public function getEfID()
    {
        return $this->efID;
    }

    /**
     * @return [type]
     */
    public function getApiFootId()
    {
        return $this->apiFoot_id;
    }

    /**
     * @return [type]
     */
    public function getResults()
    {
        return $this->results;
    }

    /**
     * @return [type]
     */
    public function getExtraTypeTemplateId()
    {
        return $this->extra_type_template_id;
    }
}
