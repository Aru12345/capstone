class PhotosController < ApplicationController
    def update
        if params[:file]
          # The data is a file upload coming from <input type="file" />
          @review.avatar.attach(params[:file])
          # Generate a url for easy display on the front end 
          photo = url_for(@review.pic)
        else
            # Maybe we want to just store a url or the raw Base64 data
            photo = photo_params[:photo]
          end

          if @review.update(photo: photo)
            render json: @review, status: :ok
          end

         
end
