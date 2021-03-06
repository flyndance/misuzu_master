class JobmastersController < ApplicationController
  before_action :set_jobmaster, only: [:show, :edit, :update, :destroy]
  before_action :set_refer, only: [:new, :edit, :create, :update]
  load_and_authorize_resource
  respond_to :js

  include JobmastersHelper

  # GET /jobmasters
  # GET /jobmasters.json
  def index
    @jobmasters = Jobmaster.all
  end

  # GET /jobmasters/1
  # GET /jobmasters/1.json
  def show
  end

  # GET /jobmasters/new
  def new
    max_job = Jobmaster.pluck(:job番号).map {|i| i.to_i}.max + 1
    # max_job = Jobmaster.maximum(:job番号) + 1
    max_job = 100001 if max_job < 100001
    @jobmaster = Jobmaster.new(job番号: max_job)
  end

  # GET /jobmasters/1/edit
  def edit
  end

  # POST /jobmasters
  # POST /jobmasters.json
  def create
    # max_job = Jobmaster.pluck(:job番号).map {|i| i.to_i}.max + 1
    # max_job = 100001 if max_job < 100001
    # jobmaster_params[:job番号] = max_job
    @jobmaster = Jobmaster.new(jobmaster_params)
    flash[:notice] = t "app.flash.new_success" if @jobmaster.save
    respond_with @jobmaster, location: jobmasters_url
  end

  # PATCH/PUT /jobmasters/1
  # PATCH/PUT /jobmasters/1.json
  def update
    flash[:notice] = t "app.flash.update_success" if @jobmaster.update(jobmaster_params)
    respond_with @jobmaster, location: jobmasters_url
  end

  # DELETE /jobmasters/1
  # DELETE /jobmasters/1.json
  def destroy
    @jobmaster.destroy
    respond_with @jobmaster, location: jobmasters_url
  end

  def ajax
    case params[:focus_field]
      when "jobmaster_ユーザ番号"
        kaisha_name = Kaishamaster.find(params[:kaisha_code]).try :name
        data = {kaisha_name: kaisha_name}
        respond_to do |format|
          format.json { render json: data}
        end
    end
  end

  def import
    Jobmaster.delete_all
    Jobmaster.reset_pk_sequence
    Jobmaster.import(params[:file])
    notice = t 'app.flash.import_csv'
    redirect_to :back, notice: notice
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jobmaster
      @jobmaster = Jobmaster.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def jobmaster_params
      params.require(:jobmaster).permit(:job番号, :job名, :開始日, :終了日, :ユーザ番号, :ユーザ名, :入力社員番号, :分類コード, :分類名, :関連Job番号, :備考)
    end

  def set_refer
    @kaishamasters = Kaishamaster.all
    @jobs = Jobmaster.all
    @shains = Shainmaster.all
    @bunruis = Bunrui.all
  end
end
