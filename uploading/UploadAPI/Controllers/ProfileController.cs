using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace UploadAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
       
    //    [RequestFormLimits(ValueLengthLimit = int.MaxValue, MultipartBodyLengthLimit = int.MaxValue)] 
        [HttpPost("upload")]
        [Produces("application/json")]
        [DisableRequestSizeLimit]
        public ActionResult<string> UploadFile(
            [FromForm(Name = "file")] IFormFile file
        ) {

            if(file == null) {
                return Ok();
            }

            return Ok(new {
                message = "Uploaded",
                file = new {
                    name = file.Name,
                    filename = file.FileName,
                    type = file.ContentType,

                }
            });
        }

    }
}
